import { test, expect } from '@playwright/test';

// Helper: navigation link info for quick reference
const navLinks = [
  { id: 'nav-about', label: 'About', path: '/about' },
  { id: 'nav-features', label: 'Features', path: '/features' },
  { id: 'nav-log-in', label: 'Log In', path: '/login' },
  { id: 'nav-sign-up', label: 'Sign Up', path: '/signup' },
];

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders logo and brand name linking to home', async ({ page }) => {
    // The logo and brand name are together in the first nav link
    const logoLink = page.locator('nav a').first();
    await expect(logoLink).toHaveAttribute('href', '/');
    await expect(logoLink.locator('span')).toHaveText('ShieldLink Health');
  });

  test('shows all main navigation links in correct order', async ({ page }) => {
    for (const { id, label, path } of navLinks) {
      const navLink = page.locator(`#${id}`);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveText(label);
      await expect(navLink).toHaveAttribute('href', path);
    }
  });

  test('navigation highlights active link', async ({ page }) => {
    for (const { id, path } of navLinks) {
      await page.click(`#${id}`);
      // The active link has a border-b-4 border-[#1d4ed8], but since that's a style, check for 'aria-current' if set (React Router), otherwise check for border via computed style
      const navLink = page.locator(`#${id}`);
      // Check if aria-current is set or check border color (fallback)
      const ariaCurrent = await navLink.getAttribute('aria-current');
      if (ariaCurrent) {
        expect(ariaCurrent).toBe('page');
      } else {
        // fallback: check computed style for border
        const border = await navLink.evaluate(el => getComputedStyle(el).borderBottomWidth);
        expect(border === '4px' || border === '4.00px').toBeTruthy();
      }
      // Go back to home for the next iteration
      await page.goto('/');
    }
  });

  test('Sign Up link is visually highlighted', async ({ page }) => {
    // Should have white text and blue background
    const signUp = page.locator('#nav-sign-up');
    const color = await signUp.evaluate(el => getComputedStyle(el).color);
    const bg = await signUp.evaluate(el => getComputedStyle(el).backgroundColor);
    // Primary color: #1d4ed8, rgb(29, 78, 216)
    expect(bg).toMatch(/rgb\(29, 78, 216\)/);
    // text color: white
    expect(color).toMatch(/rgb\(255, 255, 255\)/);
  });

  test('navigation links route to correct pages', async ({ page }) => {
    for (const { id, path, label } of navLinks) {
      await page.click(`#${id}`);
      // Check that URL changed
      await expect(page).toHaveURL(path);
      // For /about and /features, check for placeholder content
      if (path === '/about' || path === '/features') {
        await expect(page.locator('div.p-16')).toHaveText(new RegExp(`${label} page coming soon`, 'i'));
      }
      await page.goto('/');
    }
  });

  test('navigation bar is sticky at the top', async ({ page }) => {
    // The nav should stay at the top when scrolling
    const nav = page.locator('nav');
    const navBox = await nav.boundingBox();
    await page.evaluate(() => window.scrollTo(0, 2000));
    const navBoxScrolled = await nav.boundingBox();
    expect(navBoxScrolled?.y).toBeLessThanOrEqual(navBox?.y ?? 0);
  });

  test('navigation is accessible via keyboard', async ({ page }) => {
    // Focus through nav links using Tab
    await page.keyboard.press('Tab'); // logo link
    await expect(page.locator('nav a').first()).toBeFocused();
    for (let i = 1; i <= navLinks.length; i++) {
      await page.keyboard.press('Tab');
      await expect(page.locator(`#${navLinks[i-1].id}`)).toBeFocused();
    }
  });
});
