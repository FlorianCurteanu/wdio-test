import login from '../../pageobjects/swagLabs/login';

describe ('Sanity Login Page', () => {
    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await login.loginBox.waitForDisplayed();
    });

    it ('should contain elements', async () => {
        await expect(browser).toHaveTitle("Swag Labs");
        await expect($('.login_logo')).toBeDisplayed();
        await expect(login.inputUsername).toBeDisplayed();
        await expect(login.inputPassword).toBeDisplayed();
        await expect(login.loginButton).toBeDisplayed();
        await expect(login.loginButton).toHaveValue('Login');
    });

    it ('should display credentials', async () => {
        await expect(login.loginCredentials).toHaveTextContaining('locked_out_user');
        await expect(login.loginCredentials).toHaveTextContaining('standard_user');
        await expect(login.loginCredentials).toHaveTextContaining('problem_user');
        await expect(login.loginCredentials).toHaveTextContaining('performance_glitch_user');
        await expect(login.loginPassword).toHaveTextContaining('secret_sauce');
    });
    
});