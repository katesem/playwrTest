const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page.js');


test('Verify that Login Form Logo is displayed', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.gotoLoginPage();
  await loginpage.verifyformLogo();
 
});