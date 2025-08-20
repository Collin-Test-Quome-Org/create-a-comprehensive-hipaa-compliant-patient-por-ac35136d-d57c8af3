import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section and main headings', async ({ page }) => {
    // Heading in hero component (assumed h1, but fallback to text)
    await expect(page.getByRole('heading', { name: /healthcare, reimagined/i })).toBeVisible();
    await expect(page.getByText('At ShieldLink Health, your data is your own.', { exact: false })).toBeVisible();
  });

  test('displays three feature cards with correct icons and text', async ({ page }) => {
    const featureTitles = [
      'Private & Secure',
      'Human Connection',
      'Effortless Access',
    ];
    for (const title of featureTitles) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
    await expect(page.getByText('Your health information stays protected with end-to-end encryption and privacy-first design.')).toBeVisible();
    await expect(page.getByText('We put people at the heart of care. Connect, share, and heal – together.')).toBeVisible();
    await expect(page.getByText('Access your records anywhere, anytime. You control your journey.')).toBeVisible();
    // Lucide icons are SVGs, test for their presence
    const icons = await page.locator('svg').all();
    expect(icons.length).toBeGreaterThanOrEqual(3);
  });

  test('renders call-to-action with sign up button', async ({ page }) => {
    const ctaSection = page.getByRole('heading', { name: /ready to experience healthcare with heart/i });
    await expect(ctaSection).toBeVisible();
    const ctaButton = page.locator('#cta-signup');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton.getByRole('link', { name: /sign up free/i })).toBeVisible();
    await expect(ctaButton.getByRole('link', { name: /sign up free/i })).toHaveAttribute('href', '/signup');
  });

  test('clicking Sign Up Free navigates to /signup', async ({ page }) => {
    await page.locator('#cta-signup').getByRole('link', { name: /sign up free/i }).click();
    await expect(page).toHaveURL('/signup');
    await expect(page.getByRole('heading', { name: /sign up/i })).toBeVisible();
  });
});
