// Playwright tests for frontend/src/pages/LandingPage.tsx
import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section and headline', async ({ page }) => {
    await expect(page.locator('text=Healthcare, Reimagined.')).toBeVisible();
    await expect(page.locator('text=ShieldLink Health')).toBeVisible();
  });

  test('renders all feature cards', async ({ page }) => {
    await expect(page.locator('h3', { hasText: 'Private & Secure' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Human Connection' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Effortless Access' })).toBeVisible();
    await expect(page.locator('text=Your health information stays protected')).toBeVisible();
    await expect(page.locator('text=We put people at the heart of care')).toBeVisible();
    await expect(page.locator('text=Access your records anywhere, anytime')).toBeVisible();
  });

  test('renders CTA section with sign up button', async ({ page }) => {
    await expect(page.locator('text=Ready to experience healthcare with heart?')).toBeVisible();
    const cta = page.locator('#cta-signup');
    await expect(cta).toBeVisible();
    await expect(cta).toHaveText(/Sign Up Free/);
  });

  test('sign up CTA button navigates to signup page', async ({ page }) => {
    await page.click('#cta-signup');
    await expect(page).toHaveURL('/signup');
  });

  test('contains accessible headings', async ({ page }) => {
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('h2', { hasText: 'Healthcare, Reimagined.' })).toBeVisible();
    await expect(page.locator('h3', { hasText: 'Private & Secure' })).toBeVisible();
    await expect(page.locator('h4', { hasText: 'Ready to experience healthcare with heart?' })).toBeVisible();
  });

  test('visual elements match branding', async ({ page }) => {
    // Headline should have correct color
    const headline = page.locator('h2', { hasText: 'Healthcare, Reimagined.' });
    await expect(headline).toHaveCSS('color', 'rgb(29, 78, 216)'); // #1d4ed8
    // Feature cards should have secondary color background
    const featureCard = page.locator('h3', { hasText: 'Private & Secure' }).locator('..');
    await expect(featureCard).toHaveCSS('background-color', 'rgb(203, 213, 225)'); // #cbd5e1
  });

  test('main content is reachable with keyboard', async ({ page }) => {
    // Tab to Sign Up CTA
    await page.keyboard.press('Tab'); // Logo
    await page.keyboard.press('Tab'); // About
    await page.keyboard.press('Tab'); // Features
    await page.keyboard.press('Tab'); // Log In
    await page.keyboard.press('Tab'); // Sign Up
    // Tab into Hero and then further down
    // Press Tab until CTA is focused
    let foundCTA = false;
    for (let i = 0; i < 20; ++i) {
      const el = await page.evaluateHandle(() => document.activeElement);
      if (await page.locator('#cta-signup').evaluate((n, active) => n === active, el)) {
        foundCTA = true;
        break;
      }
      await page.keyboard.press('Tab');
    }
    expect(foundCTA).toBeTruthy();
  });
});
