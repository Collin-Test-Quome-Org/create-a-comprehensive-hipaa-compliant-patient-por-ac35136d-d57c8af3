import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section and company intro', async ({ page }) => {
    // Hero is rendered at top - presence check (by role or content)
    await expect(page.locator('main')).toBeVisible();
    // Heading: Healthcare, Reimagined.
    await expect(page.getByRole('heading', { name: 'Healthcare, Reimagined.' })).toBeVisible();
    // Paragraph with company name highlighted
    await expect(page.locator('main')).toContainText('ShieldLink Health');
    await expect(page.locator('main')).toContainText('your data is your own');
  });

  test('shows 3 feature cards with correct content', async ({ page }) => {
    const cardTitles = [
      'Private & Secure',
      'Human Connection',
      'Effortless Access',
    ];
    for (const title of cardTitles) {
      await expect(page.getByRole('heading', { name: title, level: 3 })).toBeVisible();
    }
    // Check for feature card descriptions
    await expect(page.locator('div').filter({ hasText: 'end-to-end encryption' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'people at the heart of care' })).toBeVisible();
    await expect(page.locator('div').filter({ hasText: 'Access your records anywhere' })).toBeVisible();
  });

  test('shows CTA button and routes to signup page', async ({ page }) => {
    const cta = page.locator('#cta-signup');
    await expect(cta).toBeVisible();
    await expect(cta).toContainText('Sign Up Free');
    await cta.click();
    await expect(page).toHaveURL('/signup');
  });

  test('main headings use brand color and font', async ({ page }) => {
    // h2: Healthcare, Reimagined. (brand color: #1d4ed8)
    const h2 = page.getByRole('heading', { name: 'Healthcare, Reimagined.' });
    const color = await h2.evaluate(el => getComputedStyle(el).color);
    expect(color).toMatch(/rgb\(29, 78, 216\)/);
    // font-family includes Roboto
    const fontFamily = await h2.evaluate(el => getComputedStyle(el).fontFamily);
    expect(fontFamily.toLowerCase()).toContain('roboto');
  });

  test('landing page is accessible by keyboard', async ({ page }) => {
    // Tab to CTA button
    await page.keyboard.press('Tab'); // nav
    await page.keyboard.press('Tab'); // nav
    await page.keyboard.press('Tab'); // nav
    await page.keyboard.press('Tab'); // nav
    await page.keyboard.press('Tab'); // nav
    // Now in main
    // Focus feature cards (not tabbable), tab to CTA button
    for (let i = 0; i < 3; i++) await page.keyboard.press('Tab');
    // CTA button
    const cta = page.locator('#cta-signup');
    await expect(cta).toBeFocused();
  });
});
