const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page.js');



test('Verify Login Form components', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.gotoLoginPage();
  await loginpage.verifyFormLogoIsDisplayed();
  await loginpage.verifyFormHeadlineIsDisplayed();
  await loginpage.verifyUserNameFieldIsDisplayed();
  await loginpage.verifyPasswordFieldIsDisplayed();
  await loginpage.verifyLoginButtonIsDisplayed();
});