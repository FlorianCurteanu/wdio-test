describe('Login Errors', () => {
    it('should open the page', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');
        await $('#login').waitForDisplayed();
    });

    it('should display error message on clicking submit button', async () => {
        await $('.radius').click();
        await $('.flash.error').waitForDisplayed();
        await expect($('.flash.error')).toHaveTextContaining('Your username is invalid!');
    });

//todo click on login button and check error message
});