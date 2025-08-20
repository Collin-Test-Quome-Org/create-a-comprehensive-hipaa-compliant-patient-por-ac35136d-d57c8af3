import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays company logo and brand name linking to home', async ({ page }) => {
    const logoLink = page.locator('nav a[href="/"]');
    await expect(logoLink).toBeVisible();
    await expect(logoLink).toContainText('ShieldLink Health');
  });

  test('shows all main navigation links with correct labels', async ({ page }) => {
    const navAbout = page.locator('#nav-about');
    const navFeatures = page.locator('#nav-features');
    const navLogin = page.locator('#nav-log-in');
    const navSignup = page.locator('#nav-sign-up');
    await expect(navAbout).toHaveText('About');
    await expect(navFeatures).toHaveText('Features');
    await expect(navLogin).toHaveText('Log In');
    await expect(navSignup).toHaveText('Sign Up');
  });

  test('navigates to About and displays correct placeholder', async ({ page }) => {
    await page.click('#nav-about');
    await expect(page.locator('div.p-16')).toContainText('About page coming soon');
  });

  test('navigates to Features and displays correct placeholder', async ({ page }) => {
    await page.click('#nav-features');
    await expect(page.locator('div.p-16')).toContainText('Features page coming soon');
  });

  test('navigates to Log In page', async ({ page }) => {
    await page.click('#nav-log-in');
    await expect(page).toHaveURL(/\/login/);
    // Optionally check for a form or login heading if present
  });

  test('navigates to Sign Up page', async ({ page }) => {
    await page.click('#nav-sign-up');
    await expect(page).toHaveURL(/\/signup/);
    // Optionally check for a form or signup heading if present
  });

  test('Sign Up nav link is visually highlighted', async ({ page }) => {
    // The Sign Up link should have a blue background and white text
    const signUp = page.locator('#nav-sign-up');
    await expect(signUp).toHaveClass(/text-white/);
    await expect(signUp).toHaveClass(/bg-\[#1d4ed8\]/);
  });

  test('active nav link shows bottom border', async ({ page }) => {
    // Navigate to Features
    await page.click('#nav-features');
    const features = page.locator('#nav-features');
    await expect(features).toHaveClass(/border-b-4/);
    // Navigate to About
    await page.click('#nav-about');
    const about = page.locator('#nav-about');
    await expect(about).toHaveClass(/border-b-4/);
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    await page.keyboard.press('Tab'); // Logo link
    await expect(page.locator('nav a[href="/"]')).toBeFocused();
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
