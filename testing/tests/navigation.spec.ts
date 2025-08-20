import { test, expect } from '@playwright/test';

test.describe('Navigation Bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows logo and ShieldLink Health brand', async ({ page }) => {
    // Logo is an SVG or image, but has no alt text; select by role and text
    const brand = page.getByText('ShieldLink Health');
    await expect(brand).toBeVisible();
    // The logo is adjacent to the brand text
    const logoAndBrand = brand.locator('..');
    await expect(logoAndBrand).toBeVisible();
  });

  test('shows navigation links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Features' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign Up' })).toBeVisible();
  });

  test('navigates to About page', async ({ page }) => {
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
    await expect(page.getByText('About page coming soon...')).toBeVisible();
  });

  test('navigates to Features page', async ({ page }) => {
    await page.getByRole('link', { name: 'Features' }).click();
    await expect(page).toHaveURL('/features');
    await expect(page.getByText('Features page coming soon...')).toBeVisible();
  });

  test('navigates to Login page', async ({ page }) => {
    await page.getByRole('link', { name: 'Log In' }).click();
    await expect(page).toHaveURL('/login');
    await expect(page.getByText('Login page coming soon...')).toBeVisible();
  });

  test('navigates to Sign Up page', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign Up' }).click();
    await expect(page).toHaveURL('/signup');
    await expect(page.getByText('Signup page coming soon...')).toBeVisible();
  });

  test('Sign Up link is highlighted', async ({ page }) => {
    // The Sign Up nav link gets special coloring
    const signUpLink = page.locator('#nav-sign-up');
    await expect(signUpLink).toBeVisible();
    // Check style for background color and text color
    const bg = await signUpLink.evaluate(el => getComputedStyle(el).backgroundColor);
    // #1d4ed8 in rgb is rgb(29, 78, 216)
    expect(bg).toMatch(/29, 78, 216/);
    const color = await signUpLink.evaluate(el => getComputedStyle(el).color);
    // text-white --> rgb(255,255,255)
    expect(color).toMatch(/255, 255, 255/);
  });

  test('active nav link is underlined/bordered', async ({ page }) => {
    // Go to /features, Features should be highlighted (bordered)
    await page.getByRole('link', { name: 'Features' }).click();
    const featuresLink = page.locator('#nav-features');
    // border-b-4 border-[#1d4ed8] = border-bottom 4px solid #1d4ed8
    const border = await featuresLink.evaluate(el => getComputedStyle(el).borderBottomWidth + ' ' + getComputedStyle(el).borderBottomColor);
    expect(border).toMatch(/4px/);
    expect(border).toMatch(/29, 78, 216/);
  });

  test('brand logo/name links to home', async ({ page }) => {
    // The logo/name is a link to '/'
    await page.getByRole('link', { name: /ShieldLink Health/ }).click();
    await expect(page).toHaveURL('/');
    // Landing page should show its hero
    await expect(page.getByText('Healthcare, Reimagined.')).toBeVisible();
  });
});
