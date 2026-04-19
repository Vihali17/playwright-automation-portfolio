import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login page tests', () => {

  test('should show login form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    expect(await loginPage.isHeadingVisible()).toBeTruthy();
  });

  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('student', 'Password123');
    await expect(page.getByText('Congratulations')).toBeVisible();
  });

  test('should show error for wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('student', 'wrongpassword');
    await expect(page.getByText('Your password is invalid!').first()).toBeVisible();
  });

});