import { expect, Locator, Page } from '@playwright/test';

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.formLogo = page.locator('#logomini');
      }
    
      async gotoLoginPage() {
        await this.page.goto('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
      }

      async verifyformLogo() {
        await expect(this.formLogo).toBeVisible();
      }
}