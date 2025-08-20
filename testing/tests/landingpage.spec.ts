// Playwright tests for LandingPage.tsx (main landing page)
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section and headline', async ({ page }) => {
    // The Hero component is at the top
    await expect(page.locator('h1')).toBeVisible();
    // Headline
    await expect(page.getByRole('heading', { name: /Healthcare, Reimagined\./i, level: 2 })).toBeVisible();
    await expect(page.getByText('At ShieldLink Health, your data is your own.', { exact: false })).toBeVisible();
  });

  test('renders the three feature cards', async ({ page }) => {
    // There are 3 feature cards with headings
    await expect(page.getByRole('heading', { name: 'Private & Secure', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Human Connection', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Effortless Access', level: 3 })).toBeVisible();
    // Their descriptions
    await expect(page.getByText('Your health information stays protected with end-to-end encryption and privacy-first design.')).toBeVisible();
    await expect(page.getByText('We put people at the heart of care. Connect, share, and heal – together.')).toBeVisible();
    await expect(page.getByText('Access your records anywhere, anytime. You control your journey.')).toBeVisible();
  });

  test('renders call-to-action with Sign Up Free button', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Ready to experience healthcare with heart/i })).toBeVisible();
    const signupButton = page.getByRole('button', { name: /Sign Up Free/i });
    await expect(signupButton).toBeVisible();
  });

  test('Sign Up Free button navigates to /signup', async ({ page }) => {
    const signupButton = page.getByRole('button', { name: /Sign Up Free/i });
    await signupButton.click();
    await expect(page).toHaveURL('/signup');
  });

  test('landing page is accessible by basic checks', async ({ page }) => {
    // No obvious accessibility violations (just basic checks)
    // All headings are present
    await expect(page.getByRole('heading', { name: /Healthcare, Reimagined\./i, level: 2 })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Private & Secure/i, level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Human Connection/i, level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Effortless Access/i, level: 3 })).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign Up Free/i })).toBeVisible();
  });

  test('features are keyboard reachable', async ({ page }) => {
    // Tab through to CTA button
    let found = false;
    for (let i = 0; i < 20; i++) {
      await page.keyboard.press('Tab');
      if (await page.evaluate(() => document.activeElement?.textContent?.includes('Sign Up Free'))) {
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
});
