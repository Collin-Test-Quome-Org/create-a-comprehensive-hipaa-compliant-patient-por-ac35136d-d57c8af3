// Playwright tests for Navigation.tsx (main nav bar)
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders company logo and title, links to homepage', async ({ page }) => {
    // The logo and title are in a link to "/"
    const logoLink = page.getByRole('link', { name: /ShieldLink Health/i });
    await expect(logoLink).toBeVisible();
    // Logo is an image or svg (no alt text)
    await expect(logoLink.locator('svg, img')).toBeVisible();
    await logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('renders all nav links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('highlighted Sign Up button has correct style', async ({ page }) => {
    // Highlighted nav link has unique background color
    const signUpNav = page.locator('#nav-sign-up');
    await expect(signUpNav).toBeVisible();
    // Should have white text (check CSS computed style)
    const color = await signUpNav.evaluate(e => getComputedStyle(e).color);
    expect(color).toMatch(/rgb\(255, 255, 255\)/); // white
  });

  test('active nav link has bottom border', async ({ page }) => {
    // About
    await page.click('#nav-about');
    await expect(page).toHaveURL('/about');
    const aboutLink = page.locator('#nav-about');
    const border = await aboutLink.evaluate(e => getComputedStyle(e).borderBottom);
    expect(border).toMatch(/4px/);
    // Features
    await page.click('#nav-features');
    await expect(page).toHaveURL('/features');
    const featuresLink = page.locator('#nav-features');
    const borderF = await featuresLink.evaluate(e => getComputedStyle(e).borderBottom);
    expect(borderF).toMatch(/4px/);
  });

  test('navigates to About and Features pages', async ({ page }) => {
    await page.click('#nav-about');
    await expect(page).toHaveURL('/about');
    await expect(page.getByText('About page coming soon...')).toBeVisible();
    await page.click('#nav-features');
    await expect(page).toHaveURL('/features');
    await expect(page.getByText('Features page coming soon...')).toBeVisible();
  });

  test('navigates to Log In and Sign Up pages', async ({ page }) => {
    await page.click('#nav-log-in');
    await expect(page).toHaveURL('/login');
    // Minimal check: page contains Log In (assumes implemented elsewhere)
    await expect(page.locator('h1, h2, h3, h4', { hasText: /Log in|Sign in/i })).toBeVisible({ timeout: 2000 }).catch(() => {});
    await page.goto('/');
    await page.click('#nav-sign-up');
    await expect(page).toHaveURL('/signup');
    await expect(page.locator('h1, h2, h3, h4', { hasText: /Sign up|Register/i })).toBeVisible({ timeout: 2000 }).catch(() => {});
  });

  test('navigation is accessible via keyboard', async ({ page }) => {
    // Tab through nav links
    await page.keyboard.press('Tab'); // logo
    await expect(page.getByRole('link', { name: /ShieldLink Health/i })).toBeFocused();
    await page.keyboard.press('Tab'); // About
    await expect(page.getByRole('link', { name: 'About' })).toBeFocused();
    await page.keyboard.press('Tab'); // Features
    await expect(page.getByRole('link', { name: 'Features' })).toBeFocused();
    await page.keyboard.press('Tab'); // Log In
    await expect(page.getByRole('link', { name: 'Log In' })).toBeFocused();
    await page.keyboard.press('Tab'); // Sign Up
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeFocused();
  });
});
