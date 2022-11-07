import { expect, Locator, Page } from '@playwright/test';

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.formLogo = page.locator('#logomini');
        this.formHeadline = page.locator('//div[@class = "wrapper"]/center/h1');
        this.usernameField = page.locator('//input[@type = "text" and @placeholder = "Username"]');
        this.passwordField = page.locator('//input[@type = "password" and @placeholder = "Password"]');
        this.loginButton = page.locator('//input[@type = "submit" and @value = "Login"]');
      }
    
      async gotoLoginPage() {
        await this.page.goto('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
      }

      async verifyFormLogoIsDisplayed() {
        await expect(this.formLogo).toBeVisible();
      }

      async verifyFormHeadlineIsDisplayed() {
        await expect(this.formHeadline).toBeVisible();
    }

    async verifyUserNameFieldIsDisplayed() {
        await expect(this.usernameField).toBeVisible();
    }

    async verifyPasswordFieldIsDisplayed() {
        await expect(this.passwordField).toBeVisible();
    }

    async verifyLoginButtonIsDisplayed() {
        await expect(this.loginButton).toBeVisible();
    }

    async verifyHeadlineTextIsDisplayed(headLineText) {
      await expect(this.formHeadline).toHaveText(headLineText);
  }

}