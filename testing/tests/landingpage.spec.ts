import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // The Hero component content varies, so just check for presence of the hero image background
    const heroBg = page.locator('div').filter({ has: page.locator("[style*='branding/assets/hero-0.png']") });
    await expect(heroBg.first()).toBeVisible();
  });

  test('renders core headline and tagline', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Healthcare, Reimagined.' })).toBeVisible();
    await expect(page.getByText(/your data is your own/i)).toBeVisible();
    await expect(page.getByText(/ShieldLink Health/)).toBeVisible();
  });

  test('renders feature highlight cards', async ({ page }) => {
    const features = [
      'Private & Secure',
      'Human Connection',
      'Effortless Access'
    ];
    for (const feature of features) {
      await expect(page.getByRole('heading', { name: feature })).toBeVisible();
    }
    await expect(
      page.getByText('Your health information stays protected with end-to-end encryption and privacy-first design.')
    ).toBeVisible();
    await expect(
      page.getByText('We put people at the heart of care. Connect, share, and heal – together.')
    ).toBeVisible();
    await expect(
      page.getByText('Access your records anywhere, anytime. You control your journey.')
    ).toBeVisible();
  });

  test('renders call-to-action sign up section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: /Ready to experience healthcare with heart/i })
    ).toBeVisible();
    const cta = page.locator('#cta-signup');
    await expect(cta).toBeVisible();
    await expect(cta.getByRole('link', { name: /Sign Up Free/i })).toHaveAttribute('href', '/signup');
  });

  test('clicking sign up CTA navigates to /signup', async ({ page }) => {
    await page.locator('#cta-signup').getByRole('link', { name: /Sign Up Free/i }).click();
    await expect(page).toHaveURL('/signup');
  });

  test('landing page layout is accessible', async ({ page }) => {
    // Check all major headings use semantic tags
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.getByRole('heading', { name: /Healthcare, Reimagined./i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Ready to experience healthcare with heart/i })).toBeVisible();
  });
});
