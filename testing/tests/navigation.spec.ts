import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders company logo and brand name, links to home', async ({ page }) => {
    // Click on the logo/brand name and check navigation to home
    const logoLink = page.getByRole('link', { name: /ShieldLink Health/i });
    await expect(logoLink).toBeVisible();
    await logoLink.click();
    await expect(page).toHaveURL('/');
  });

  test('renders all navigation links with correct text and href', async ({ page }) => {
    const links = [
      { id: 'nav-about', label: 'About', path: '/about' },
      { id: 'nav-features', label: 'Features', path: '/features' },
      { id: 'nav-log-in', label: 'Log In', path: '/login' },
      { id: 'nav-sign-up', label: 'Sign Up', path: '/signup' }
    ];
    for (const { id, label, path } of links) {
      const link = page.locator(`#${id}`);
      await expect(link).toHaveText(label);
      await expect(link).toHaveAttribute('href', path);
    }
  });

  test('navigates to correct pages on navigation link click', async ({ page }) => {
    const paths = [
      { id: 'nav-about', path: '/about' },
      { id: 'nav-features', path: '/features' },
      { id: 'nav-log-in', path: '/login' },
      { id: 'nav-sign-up', path: '/signup' },
    ];
    for (const { id, path: dest } of paths) {
      await page.goto('/');
      await page.locator(`#${id}`).click();
      await expect(page).toHaveURL(dest);
    }
  });

  test('Sign Up link is visually highlighted', async ({ page }) => {
    const signUpLink = page.locator('#nav-sign-up');
    // Should have white text and blue background
    await expect(signUpLink).toHaveClass(/text-white/);
    await expect(signUpLink).toHaveClass(/bg-\[#1d4ed8\]/);
  });

  test('active navigation link is visually underlined', async ({ page }) => {
    // Go to /login, then nav-log-in should have border
    await page.goto('/login');
    const loginLink = page.locator('#nav-log-in');
    await expect(loginLink).toHaveClass(/border-b-4/);
    await expect(loginLink).toHaveClass(/border-\[#1d4ed8\]/);
  });

  test('navigation bar is sticky', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/sticky/);
    await expect(nav).toHaveClass(/top-0/);
  });
});
