import { test, expect } from '@playwright/test';

// Utility: navigation menu links and their expected destinations
const navLinks = [
  { id: 'nav-about', label: 'About', path: '/about', content: /About page coming soon/i },
  { id: 'nav-features', label: 'Features', path: '/features', content: /Features page coming soon/i },
  { id: 'nav-log-in', label: 'Log In', path: '/login' },
  { id: 'nav-sign-up', label: 'Sign Up', path: '/signup' },
];

test.describe('Navigation menu', () => {
  test('renders all nav links with correct labels', async ({ page }) => {
    await page.goto('/');
    for (const link of navLinks) {
      const locator = page.locator(`#${link.id}`);
      await expect(locator).toBeVisible();
      await expect(locator).toHaveText(link.label);
      await expect(locator).toHaveAttribute('href', link.path);
    }
    // Logo and brand text
    await expect(page.getByText('ShieldLink Health', { exact: true })).toBeVisible();
  });

  test('navigates to / when clicking logo/brand', async ({ page }) => {
    await page.goto('/features');
    await page.getByText('ShieldLink Health', { exact: true }).click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /Healthcare, Reimagined/i })).toBeVisible();
  });

  for (const link of navLinks) {
    test(`navigates to ${link.path} when clicking ${link.label} link`, async ({ page }) => {
      await page.goto('/');
      await page.locator(`#${link.id}`).click();
      await expect(page).toHaveURL(link.path);
      if (link.path === '/about' || link.path === '/features') {
        await expect(page.getByText(link.content)).toBeVisible();
      } else if (link.path === '/login') {
        // Login page: look for a typical form field, fallback to heading
        await expect(
          page.getByRole('heading', { name: /Log ?In/i }).or(
            page.getByPlaceholder(/email|username/i)
          )
        ).toBeVisible();
      } else if (link.path === '/signup') {
        // Signup page: look for a heading or form field
        await expect(
          page.getByRole('heading', { name: /Sign ?Up/i }).or(
            page.getByPlaceholder(/email|username/i)
          )
        ).toBeVisible();
      }
    });
  }

  test('highlights the active link', async ({ page }) => {
    for (const link of navLinks) {
      await page.goto(link.path);
      const active = await page.locator(`#${link.id}`);
      // Check if parent has active border class (border-b-4 border-[#1d4ed8])
      await expect(active.locator('xpath=ancestor::*[contains(@class, "border-b-4")]')).toHaveCount(1);
    }
  });

  test('Sign Up button has correct styling', async ({ page }) => {
    await page.goto('/');
    const signUp = page.locator('#nav-sign-up');
    // The Sign Up link should have white text (text-white class) and blue background
    await expect(signUp).toHaveClass(/text-white/);
    await expect(signUp).toHaveClass(/bg-\[#1d4ed8\]/);
  });
});
