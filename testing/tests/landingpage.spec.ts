import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows hero and main heading', async ({ page }) => {
    // Hero may be an image or large banner (cannot test alt but check presence)
    // Main heading
    await expect(page.locator('h2')).toHaveText('Healthcare, Reimagined.');
    await expect(page.locator('text=ShieldLink Health')).toBeVisible();
  });

  test('displays all three feature cards', async ({ page }) => {
    const cards = page.locator('div.grid > div');
    await expect(cards).toHaveCount(3);
    await expect(cards.nth(0)).toContainText('Private & Secure');
    await expect(cards.nth(1)).toContainText('Human Connection');
    await expect(cards.nth(2)).toContainText('Effortless Access');
  });

  test('feature cards have correct descriptions', async ({ page }) => {
    await expect(page.locator('text=Your health information stays protected with end-to-end encryption and privacy-first design.')).toBeVisible();
    await expect(page.locator('text=We put people at the heart of care. Connect, share, and heal – together.')).toBeVisible();
    await expect(page.locator('text=Access your records anywhere, anytime. You control your journey.')).toBeVisible();
  });

  test('call to action section present with sign up button', async ({ page }) => {
    await expect(page.locator('h4')).toHaveText('Ready to experience healthcare with heart?');
    const ctaButton = page.locator('#cta-signup');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText('Sign Up Free');
  });

  test('sign up CTA button navigates to signup page', async ({ page }) => {
    await page.click('#cta-signup');
    await expect(page).toHaveURL(/\/signup$/);
    await expect(page.locator('h1')).toHaveCount(1); // Signup page should have a heading
  });

  test('page is accessible via keyboard (tab to CTA)', async ({ page }) => {
    // Tab through nav, then main content, then to CTA button
    let foundCTA = false;
    for (let i = 0; i < 15; i++) {
      await page.keyboard.press('Tab');
      if (await page.locator('#cta-signup').isFocused()) {
        foundCTA = true;
        break;
      }
    }
    expect(foundCTA).toBe(true);
  });
});
