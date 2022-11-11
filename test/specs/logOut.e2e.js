describe ('LoginSwagLabs', () => {
    let menuItems;

    before(async () => {
        await browser.setWindowSize(1200, 800);
    });

    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('.login-box').waitForDisplayed();
    });

    it ('should add username', async () => {
        await $('[data-test="username"]').setValue('standard_user');
        await expect($('[data-test="username"]')).toHaveValue('standard_user');
    });
    
    it ('should add password', async () => {
        await $('[data-test="password"]').setValue('secret_sauce');
        await expect($('[data-test="password"]')).toHaveValue('secret_sauce');
    });

    it('should press Login button', async () => {
        await $('[data-test="login-button"]').click();
        await $('[data-test="login-button"]').waitForDisplayed({reverse: true});
        await $('#inventory_container.inventory_container').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/inventory.html');
    });

    it('should open burger menu', async () => {
        await $('#react-burger-menu-btn').click();
        await $('.bm-item-list').waitForDisplayed();
    });

    it('should check 4 buttons', async () => {
        menuItems = await $$('.bm-item-list a');
        await expect(menuItems).toBeElementsArrayOfSize(4);
    });

    it('should close burger menu', async () => {
        await $('#react-burger-cross-btn').waitForClickable();
        await $('#react-burger-cross-btn').click();
        await $('.bm-item-list').waitForDisplayed({reverse: true});
    });

    it('should open burger menu', async () => {
        await $('#react-burger-menu-btn').click();
        await $('.bm-item-list').waitForDisplayed();
    });

    it('should logout', async () => {
        await menuItems[2].waitForClickable();
        await expect(menuItems[2]).toHaveText('LOGOUT');
        await menuItems[2].click();
    });

});    
