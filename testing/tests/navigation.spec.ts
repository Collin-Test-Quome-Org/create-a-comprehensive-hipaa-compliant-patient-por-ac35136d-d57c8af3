import { test, expect } from '@playwright/test';

// Navigation bar tests

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays company logo and name with link to home', async ({ page }) => {
    const logoLink = page.getByRole('link', { name: /shieldlink health/i });
    await expect(logoLink).toBeVisible();
    await expect(logoLink).toHaveAttribute('href', '/');
    // Also check logo image is present (CompanyLogo component renders an img/svg)
    // We assume the logo is the first child in the link
    const logoSvg = logoLink.locator('svg');
    await expect(logoSvg).toBeVisible();
    await expect(logoLink.locator('span')).toHaveText('ShieldLink Health');
  });

  test('shows all navigation links with correct labels', async ({ page }) => {
    const navAbout = page.locator('#nav-about');
    const navFeatures = page.locator('#nav-features');
    const navLogin = page.locator('#nav-log-in');
    const navSignup = page.locator('#nav-sign-up');
    await expect(navAbout).toBeVisible();
    await expect(navAbout).toHaveText('About');
    await expect(navFeatures).toBeVisible();
    await expect(navFeatures).toHaveText('Features');
    await expect(navLogin).toBeVisible();
    await expect(navLogin).toHaveText('Log In');
    await expect(navSignup).toBeVisible();
    await expect(navSignup).toHaveText('Sign Up');
  });

  test('navigation highlights current page', async ({ page }) => {
    // On Landing page, none of the nav links should have border class except home
    const navAbout = page.locator('#nav-about');
    await expect(navAbout).not.toHaveClass(/border-b-4/);
    // Go to About
    await navAbout.click();
    await expect(page).toHaveURL('/about');
    // Now 'About' nav link should have border-b-4
    await expect(page.locator('#nav-about')).toHaveClass(/border-b-4/);
  });

  test('navigates to all main links and displays correct content', async ({ page }) => {
    await page.locator('#nav-about').click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByText('About page coming soon...')).toBeVisible();

    await page.locator('#nav-features').click();
    await expect(page).toHaveURL('/features');
    await expect(page.getByText('Features page coming soon...')).toBeVisible();

    await page.locator('#nav-log-in').click();
    await expect(page).toHaveURL('/login');
    await expect(page.getByRole('heading', { name: /log in/i })).toBeVisible();

    await page.locator('#nav-sign-up').click();
    await expect(page).toHaveURL('/signup');
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible();
  });

  test('Sign Up link is visually highlighted', async ({ page }) => {
    const navSignup = page.locator('#nav-sign-up');
    await expect(navSignup).toHaveClass(/bg-\[#1d4ed8\]/); // primary color background
    await expect(navSignup).toHaveClass(/text-white/);
  });

  test('navigation is accessible by keyboard', async ({ page }) => {
    // Focus navigation links and ensure they are tabbable
    await page.keyboard.press('Tab'); // logo
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
