import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays company logo and title with link to home', async ({ page }) => {
    // The logo and brand name are linked to home
    const logoLink = page.locator('a[href="/"]');
    await expect(logoLink).toBeVisible();
    await expect(logoLink).toContainText('ShieldLink Health');
  });

  test('shows all navigation links with correct labels and highlights', async ({ page }) => {
    const aboutLink = page.locator('#nav-about');
    const featuresLink = page.locator('#nav-features');
    const loginLink = page.locator('#nav-log-in');
    const signupLink = page.locator('#nav-sign-up');
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveText('About');
    await expect(featuresLink).toBeVisible();
    await expect(featuresLink).toHaveText('Features');
    await expect(loginLink).toBeVisible();
    await expect(loginLink).toHaveText('Log In');
    await expect(signupLink).toBeVisible();
    await expect(signupLink).toHaveText('Sign Up');
  });

  test('navigates to About page and highlights active link', async ({ page }) => {
    await page.click('#nav-about');
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.locator('div')).toContainText('About page coming soon');
    // Check if About link is highlighted (border-b-4)
    const aboutLink = page.locator('#nav-about');
    await expect(aboutLink).toHaveAttribute('class', /border-b-4/);
  });

  test('navigates to Features, Log In, and Sign Up pages', async ({ page }) => {
    await page.click('#nav-features');
    await expect(page).toHaveURL(/\/features$/);
    await expect(page.locator('div')).toContainText('Features page coming soon');
    await page.click('#nav-log-in');
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.locator('h1')).toHaveCount(1); // Should have a heading for login page
    await page.click('#nav-sign-up');
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.locator('h1')).toHaveCount(1); // Should have a heading for signup page
  });

  test('Sign Up nav link is styled as highlighted (primary color)', async ({ page }) => {
    const signupLink = page.locator('#nav-sign-up');
    // Should have white text and blue background
    await expect(signupLink).toHaveClass(/bg-\[#1d4ed8\]/);
    await expect(signupLink).toHaveClass(/text-white/);
  });

  test('keyboard navigation: tab to nav links', async ({ page }) => {
    await page.keyboard.press('Tab'); // Logo/home
    await expect(page.locator('a[href="/"]')).toBeFocused();
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
