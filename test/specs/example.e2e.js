import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    xit('should login with valid credentials', async () => {
        await LoginPage.open();

        await $('#username').setValue('username');
        await browser.pause(3000);

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        // await browser.pause(9000);
        // await $('.input').setValue('test123');
    });

    it('should display login error', async () => {
        await LoginPage.open();
        await $('#username').setValue('username');
        await $('button[type="submit"]').click();
        await browser.pause(3000);
    });
});

/*
- click login - check error is displayed and has text
- login and check page title (Secure Area)
- logout and check message (You logged out of the secure area!) and url contains /login
*/
