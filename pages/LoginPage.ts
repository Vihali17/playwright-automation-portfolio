import { Page } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  // Locators defined as getters — this fixes the error
  get usernameField() { return this.page.getByLabel('Username'); }
  get passwordField() { return this.page.getByLabel('Password'); }
  get submitButton() { return this.page.getByRole('button', { name: 'Submit' }); }

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }

  async isHeadingVisible() {
    return this.page.getByRole('heading', { name: 'Test login' }).isVisible();
  }

  async getErrorMessage() {
    return this.page.getByText('Your password is invalid!').first().textContent();
  }
}