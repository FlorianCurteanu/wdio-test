describe ('Sanity Login Page', () => {
    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('.login-box').waitForDisplayed();
    });

    it ('should contain elements', async () => {
        await expect(browser).toHaveTitle("Swag Labs");
        await expect($('.bot_column')).toBeDisplayed();
        await expect($('.login_logo')).toBeDisplayed();
        await expect($('[data-test="username"]')).toBeDisplayed();
        await expect($('[data-test="password"]')).toBeDisplayed();
        await expect($('[data-test="login-button"]')).toBeDisplayed();
        await expect($('[data-test="login-button"]')).toHaveValue('Login');
    });

    it ('should display credentials', async () => {
        await expect($('#login_credentials')).toHaveTextContaining('locked_out_user');
        await expect($('#login_credentials')).toHaveTextContaining('standard_user');
        await expect($('#login_credentials')).toHaveTextContaining('problem_user');
        await expect($('#login_credentials')).toHaveTextContaining('performance_glitch_user');
        await expect($('.login_password')).toHaveTextContaining('secret_sauce');
    });
});