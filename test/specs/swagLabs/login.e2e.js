import login from '../../pageobjects/swagLabs/login';

describe ('Login', () => {
    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await login.loginContainer.waitForDisplayed();
    });

    it ('should add username', async () => {
        await login.inputUsername.setValue('standard_user');
        await expect(login.inputUsername).toHaveValue('standard_user');
    });

    it ('should add password', async () => {
        await login.inputPassword.setValue('secret_sauce');
        await expect(login.inputPassword).toHaveValue('secret_sauce');
    });

    it('should Login and display Products page', async () => {
        await login.loginButton.click();
        await $('#header_container .title').waitForDisplayed();
        await expect($('#header_container .title')).toHaveText('Products');
    });

});