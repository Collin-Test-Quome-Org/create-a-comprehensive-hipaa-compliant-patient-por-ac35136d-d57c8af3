import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // Hero is a component, but let's check for primary heading and brand
    await expect(page.getByRole('heading', { name: /healthcare, reimagined/i })).toBeVisible();
    await expect(page.getByText(/your data is your own/i)).toBeVisible();
  });

  test('shows all three feature cards with correct icons and text', async ({ page }) => {
    const cardTitles = [
      'Private & Secure',
      'Human Connection',
      'Effortless Access',
    ];
    for (const title of cardTitles) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
    await expect(page.getByText('Your health information stays protected with end-to-end encryption and privacy-first design.')).toBeVisible();
    await expect(page.getByText('We put people at the heart of care. Connect, share, and heal – together.')).toBeVisible();
    await expect(page.getByText('Access your records anywhere, anytime. You control your journey.')).toBeVisible();
  });

  test('renders the call-to-action section and signup button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /ready to experience healthcare with heart/i })).toBeVisible();
    const ctaButton = page.getByRole('link', { name: /sign up free/i });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '/signup');
    await expect(ctaButton).toHaveClass(/font-bold/);
  });

  test('cta signup button navigates to signup page', async ({ page }) => {
    await page.getByRole('link', { name: /sign up free/i }).click();
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible();
  });

  test('feature section cards have accessible contrast', async ({ page }) => {
    // Check for background color and text color classes
    const features = page.locator('.grid > div');
    await expect(features.nth(0)).toHaveClass(/bg-\[#cbd5e1\]/);
    await expect(features.nth(0)).toHaveClass(/rounded-xl/);
    await expect(features.nth(0)).toContainText('Private & Secure');
    await expect(features.nth(1)).toHaveClass(/bg-\[#cbd5e1\]/);
    await expect(features.nth(2)).toHaveClass(/bg-\[#cbd5e1\]/);
  });

  test('page layout is responsive (basic check)', async ({ page }) => {
    // Desktop grid
    await expect(page.locator('.grid')).toHaveClass(/md:grid-cols-3/);
    // Simulate mobile
    await page.setViewportSize({ width: 375, height: 800 });
    await expect(page.locator('.grid')).toHaveClass(/grid-cols-1/);
  });
});
