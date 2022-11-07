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


test('Verify that the text of the Login form headline equals to "AQA internship Login"', async ({ page }) => {
  const loginpage = new LoginPage(page);
    await loginpage.gotoLoginPage();
    await loginpage.verifyHeadlineTextIsDisplayed('AQA internship Login');
});
