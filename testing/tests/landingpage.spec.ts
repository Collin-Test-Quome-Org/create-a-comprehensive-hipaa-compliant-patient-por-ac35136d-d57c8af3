import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // There is a Hero component, but we only have access to the heading below
    await expect(page.getByText('Healthcare, Reimagined.')).toBeVisible();
    await expect(page.getByText(/your data is your own/i)).toBeVisible();
    await expect(page.getByText('ShieldLink Health')).toBeVisible();
  });

  test('renders three feature cards', async ({ page }) => {
    await expect(page.getByText('Private & Secure')).toBeVisible();
    await expect(page.getByText('Human Connection')).toBeVisible();
    await expect(page.getByText('Effortless Access')).toBeVisible();
    await expect(page.getByText('Your health information stays protected with end-to-end encryption and privacy-first design.')).toBeVisible();
    await expect(page.getByText('We put people at the heart of care. Connect, share, and heal – together.')).toBeVisible();
    await expect(page.getByText('Access your records anywhere, anytime. You control your journey.')).toBeVisible();
  });

  test('renders call-to-action section', async ({ page }) => {
    await expect(page.getByText('Ready to experience healthcare with heart?')).toBeVisible();
    // Button contains 'Sign Up Free' and is a link to /signup
    const ctaButton = page.getByRole('link', { name: 'Sign Up Free' });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', '/signup');
  });

  test('CTA Sign Up button navigates to signup page', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up Free' }).click();
    await expect(page).toHaveURL('/signup');
    await expect(page.getByText('Signup page coming soon...')).toBeVisible();
  });

  test('feature cards have accessible structure', async ({ page }) => {
    // Each card should have a heading and paragraph
    const headings = await page.locator('h3').allTextContents();
    expect(headings).toContain('Private & Secure');
    expect(headings).toContain('Human Connection');
    expect(headings).toContain('Effortless Access');
  });

  test('page is visually accessible (landmarks, headings)', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h2')).toContainText('Healthcare, Reimagined.');
    await expect(page.locator('h3')).toHaveCount(3);
    await expect(page.locator('h4')).toContainText('Ready to experience healthcare with heart?');
  });
});
