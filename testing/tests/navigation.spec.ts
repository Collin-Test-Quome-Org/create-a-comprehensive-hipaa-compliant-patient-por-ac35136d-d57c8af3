import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays the company logo and brand name with correct styling', async ({ page }) => {
    const logo = page.locator('nav').locator('svg');
    await expect(logo).toBeVisible();
    const brand = page.getByText('ShieldLink Health');
    await expect(brand).toBeVisible();
    await expect(brand).toHaveClass(/font-bold/);
    await expect(brand).toHaveText('ShieldLink Health');
  });

  test('renders all navigation links', async ({ page }) => {
    await expect(page.locator('#nav-about')).toHaveText('About');
    await expect(page.locator('#nav-features')).toHaveText('Features');
    await expect(page.locator('#nav-log-in')).toHaveText('Log In');
    await expect(page.locator('#nav-sign-up')).toHaveText('Sign Up');
  });

  test('highlights the "Sign Up" nav link with primary color and text', async ({ page }) => {
    const signUpLink = page.locator('#nav-sign-up');
    await expect(signUpLink).toHaveClass(/bg-\[#1d4ed8\]/); // bg-primary
    await expect(signUpLink).toHaveClass(/text-white/);
  });

  test('indicates active nav link by bottom border when navigated', async ({ page }) => {
    await page.click('#nav-features');
    await expect(page).toHaveURL(/\/features$/);
    const featuresLink = page.locator('#nav-features');
    await expect(featuresLink).toHaveClass(/border-b-4/);
    await expect(featuresLink).toHaveClass(/border-\[#1d4ed8\]/);
  });

  test('navigation links route to correct pages', async ({ page }) => {
    await page.click('#nav-about');
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByText('About page coming soon...')).toBeVisible();

    await page.click('nav'); // Click nav to dismiss potential overlays
    await page.click('#nav-features');
    await expect(page).toHaveURL(/\/features$/);
    await expect(page.getByText('Features page coming soon...')).toBeVisible();

    await page.click('#nav-log-in');
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole('heading', { name: /log in/i })).toBeVisible();

    await page.click('#nav-sign-up');
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible();
  });

  test('clicking brand logo returns to home page', async ({ page }) => {
    await page.click('#nav-features');
    await page.click('nav a[href="/"]');
    await expect(page).toHaveURL('/');
    await expect(page.getByText('Healthcare, Reimagined.')).toBeVisible();
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    // Tab through navigation links and check focus
    await page.keyboard.press('Tab'); // Focus logo
    await expect(page.locator('nav a').first()).toBeFocused();
    await page.keyboard.press('Tab'); // About
    await expect(page.locator('#nav-about')).toBeFocused();
    await page.keyboard.press('Tab'); // Features
    await expect(page.locator('#nav-features')).toBeFocused();
    await page.keyboard.press('Tab'); // Log In
    await expect(page.locator('#nav-log-in')).toBeFocused();
    await page.keyboard.press('Tab'); // Sign Up
    await expect(page.locator('#nav-sign-up')).toBeFocused();
  });
});
