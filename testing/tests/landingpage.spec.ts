import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section', async ({ page }) => {
    // Expect the Hero component is visible by checking a heading or hero background
    // If Hero component has a known heading or content, check for it; otherwise, skip this check.
    // For brand: check for "ShieldLink Health" in the hero area.
    await expect(page.locator('text=ShieldLink Health')).toBeVisible();
  });

  test('shows tagline and intro', async ({ page }) => {
    await expect(page.locator('h2')).toHaveText('Healthcare, Reimagined.');
    await expect(page.locator('text=your data is your own')).toBeVisible();
    await expect(page.locator('text=ShieldLink Health')).toBeVisible();
  });

  test('shows feature cards with correct headings and descriptions', async ({ page }) => {
    await expect(page.locator('h3:has-text("Private & Secure")')).toBeVisible();
    await expect(page.locator('h3:has-text("Human Connection")')).toBeVisible();
    await expect(page.locator('h3:has-text("Effortless Access")')).toBeVisible();
    await expect(page.locator('text=Your health information stays protected')).toBeVisible();
    await expect(page.locator('text=We put people at the heart of care')).toBeVisible();
    await expect(page.locator('text=Access your records anywhere, anytime')).toBeVisible();
  });

  test('shows call to action and navigates to signup', async ({ page }) => {
    await expect(page.locator('h4')).toHaveText('Ready to experience healthcare with heart?');
    const ctaBtn = page.locator('#cta-signup');
    await expect(ctaBtn).toBeVisible();
    await expect(ctaBtn).toContainText('Sign Up Free');
    await ctaBtn.click();
    await expect(page).toHaveURL(/\/signup/);
  });

  test('Landing page is accessible by keyboard', async ({ page }) => {
    // Tab through navigation, then to hero/cta
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('Tab');
    }
    // Focus should now be on the CTA signup button
    await expect(page.locator('#cta-signup')).toBeFocused();
  });
});
