import { test, expect } from '@playwright/test';

test.describe('Login page tests', () => {

  test('should show login form', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
    await expect(page.getByLabel('Username')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Congratulations')).toBeVisible();
  });

  test('should show error for wrong password', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByText('Your password is invalid!').first()).toBeVisible();
  });

});