describe ('LoginSwagLabs', () => {
    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('.login-box').waitForDisplayed();
    });

    it ('should add username', async () => {
        await $('[data-test="username"]').setValue('standard_user');
        await expect($('[data-test="username"]')).toHaveValue('standard_user');
    })

    it ('should add password', async () => {
        await $('[data-test="password"]').setValue('secret_sauce');
        await expect($('[data-test="password"]')).toHaveValue('secret_sauce');
    })

    it('should Login and display Products page', async () => {
        await $('[data-test="login-button"]').click();
        await $('[data-test="login-button"]').waitForDisplayed({reverse: true});
        await $('#header_container .title').waitForDisplayed();
        await expect($('#header_container .title')).toHaveText('PRODUCTS');
    });

});