// Playwright tests for frontend/src/Navigation.tsx
import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders all navigation links and company logo', async ({ page }) => {
    // Logo and app name
    await expect(page.locator('text=ShieldLink Health')).toBeVisible();
    // Nav links
    await expect(page.locator('#nav-about')).toHaveText('About');
    await expect(page.locator('#nav-features')).toHaveText('Features');
    await expect(page.locator('#nav-log-in')).toHaveText('Log In');
    await expect(page.locator('#nav-sign-up')).toHaveText('Sign Up');
  });

  test('navigates to About page', async ({ page }) => {
    await page.click('#nav-about');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('text=About page coming soon...')).toBeVisible();
  });

  test('navigates to Features page', async ({ page }) => {
    await page.click('#nav-features');
    await expect(page).toHaveURL('/features');
    await expect(page.locator('text=Features page coming soon...')).toBeVisible();
  });

  test('navigates to Log In page', async ({ page }) => {
    await page.click('#nav-log-in');
    await expect(page).toHaveURL('/login');
    // Optionally check for login form elements if present
  });

  test('navigates to Sign Up page', async ({ page }) => {
    await page.click('#nav-sign-up');
    await expect(page).toHaveURL('/signup');
    // Optionally check for signup form elements if present
  });

  test('active nav link is highlighted', async ({ page }) => {
    // Home: none of the nav links should be active
    await expect(page.locator('#nav-about')).not.toHaveClass(/border-b-4/);
    // Go to Features
    await page.click('#nav-features');
    await expect(page.locator('#nav-features')).toHaveClass(/border-b-4/);
    // Go to About
    await page.click('#nav-about');
    await expect(page.locator('#nav-about')).toHaveClass(/border-b-4/);
  });

  test('company logo link navigates to home', async ({ page }) => {
    // Go away from home
    await page.click('#nav-about');
    await page.click('text=ShieldLink Health');
    await expect(page).toHaveURL('/');
    await expect(page.locator('text=Healthcare, Reimagined.')).toBeVisible();
  });

  test('Sign Up link is visually highlighted', async ({ page }) => {
    // Should have the blue background and white text
    const signUpLink = page.locator('#nav-sign-up');
    await expect(signUpLink).toHaveClass(/bg-\[#1d4ed8\]/);
    await expect(signUpLink).toHaveClass(/text-white/);
  });

  test('navigation is accessible via keyboard', async ({ page }) => {
    // Tab to first nav link
    await page.keyboard.press('Tab'); // Logo link
    await expect(page.locator('text=ShieldLink Health')).toBeFocused();
    // Tab through each nav link
    for (const id of ['nav-about','nav-features','nav-log-in','nav-sign-up']) {
      await page.keyboard.press('Tab');
      await expect(page.locator(`#${id}`)).toBeFocused();
    }
  });
});
