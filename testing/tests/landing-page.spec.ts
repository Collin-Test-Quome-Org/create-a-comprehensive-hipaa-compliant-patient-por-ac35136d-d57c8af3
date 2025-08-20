import { test, expect } from '@playwright/test';

test.describe('LandingPage', () => {
  test('renders hero and main headline', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /Healthcare, Reimagined/i })).toBeVisible();
    // Check tagline present
    await expect(page.getByText(/your data is your own/i)).toBeVisible();
    // Company name highlighted
    await expect(page.getByText('ShieldLink Health', { exact: false })).toBeVisible();
  });

  test('renders feature cards with correct titles and icons', async ({ page }) => {
    await page.goto('/');
    // Features headings
    await expect(page.getByRole('heading', { name: /Private & Secure/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Human Connection/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Effortless Access/i })).toBeVisible();
    // Feature descriptions
    await expect(page.getByText(/end-to-end encryption/i)).toBeVisible();
    await expect(page.getByText(/people at the heart/i)).toBeVisible();
    await expect(page.getByText(/your records anywhere/i)).toBeVisible();
  });

  test('renders CTA section with sign up button', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByRole('heading', { name: /Ready to experience healthcare with heart/i });
    await expect(cta).toBeVisible();
    const ctaBtn = page.locator('#cta-signup');
    await expect(ctaBtn).toBeVisible();
    await expect(ctaBtn.getByRole('link', { name: /Sign Up Free/i })).toHaveAttribute('href', '/signup');
  });

  test('sign up CTA button navigates to /signup', async ({ page }) => {
    await page.goto('/');
    await page.locator('#cta-signup').getByRole('link', { name: /Sign Up Free/i }).click();
    await expect(page).toHaveURL('/signup');
    // Expect a signup heading or some expected signup form element
    await expect(
      page.getByRole('heading', { name: /Sign ?Up/i }).or(
        page.getByPlaceholder(/email|username/i)
      )
    ).toBeVisible();
  });

  test('basic accessibility: headings hierarchy and link roles', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 2, name: /Healthcare, Reimagined/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: /Private & Secure/i })).toBeVisible();
    await expect(page.getByRole('heading', { level: 4, name: /Ready to experience healthcare with heart/i })).toBeVisible();
    // Check nav links are role=link
    await expect(page.getByRole('link', { name: /About/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Features/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Log In/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Sign Up/i })).toBeVisible();
  });
});
