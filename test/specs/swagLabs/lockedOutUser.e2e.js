import loginPage from '../../pageobjects/swagLabs/login';

describe ('Locked Out User', () => {

    before(async () => {
        await browser.setWindowSize(1600, 1000);
    });

    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginPage.loginContainer.waitForDisplayed();
    });

    it ('should display error message after click Login', async () => {
        await loginPage.login ('locked_out_user', 'secret_sauce');
        await loginPage.errorContainer.waitForDisplayed();
    });

    it ('should check error message and close the error container', async () => {
        await expect(loginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        await loginPage.errorButton.click();
        await loginPage.errorMessage.waitForDisplayed({reverse: true});
    });

});