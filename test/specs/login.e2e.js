describe ('Login', () => {
    it ('should open page', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $('#login').waitForDisplayed();
    });

    it ('should add username', async () => {
        await $('#username').setValue('tomsmith');
        await expect($('#username')).toHaveValue('tomsmith');
    })

    it('should add password', async () => {
        await $('#password').setValue('SuperSecretPassword!');
        await expect($('#password')).toHaveValue('SuperSecretPassword!');
    })

    it('should press Submit button', async () => {
        await $('.radius').click();
        await $('#login').waitForDisplayed({reverse: true});
        await $('#flash-messages').waitForDisplayed();
        await expect($('#flash')).toHaveTextContaining('You logged into a secure area!');
    })

    it("should have title: Secure Area", async () => {
        await expect(browser).toHaveTitle('The Internet');
        await expect($('h2')).toHaveText('Secure Area');
    })

    it('press logout and check message/URL', async () => {
        await $('a.button.secondary.radius').click();
        await $('#login').waitForDisplayed();
        await expect($('#flash')).toHaveTextContaining(('You logged out of the secure area!'));
        await expect(browser).toHaveUrlContaining('login');
    })
})