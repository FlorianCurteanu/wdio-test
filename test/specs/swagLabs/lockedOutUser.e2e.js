import LoginPage from '../../pageobjects/swagLabs/login';

describe ('Locked Out User', () => {

    before(async () => {
        await browser.setWindowSize(1600, 1000);
    });

    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await LoginPage.loginContainer.waitForDisplayed();
    });

    it ('should display error message after click Login', async () => {
        await LoginPage.login ('locked_out_user', 'secret_sauce');
        await LoginPage.errorContainer.waitForDisplayed();
    });

    it ('should check error message and close the error container', async () => {
        await expect(LoginPage.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        await LoginPage.errorButton.click();
        await LoginPage.errorMessage.waitForDisplayed({reverse: true});
    });

});