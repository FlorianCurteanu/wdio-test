class loginPage {
    constructor() {
        this.mainSelector = '.login_wrapper';
    }

    get loginContainer() {
        return $(this.mainSelector);
    }
    
    get inputUsername () {
        return this.loginContainer.$('[data-test="username"]');
    }

    get inputPassword () {
        return this.loginContainer.$('[data-test="password"]');
    }

    get loginButton () {
        return this.loginContainer.$('[data-test="login-button"]');
    }

    get loginBox () {
        return this.loginContainer.$('.login-box');
    }

    get loginCredentials () {
        return this.loginContainer.$('#login_credentials');
    }

    get loginPassword () {
        return this.loginContainer.$('.login_password');
    }

    get errorContainer () {
        return this.loginContainer.$('.error-message-container');
    }

    get errorMessage () {
        return this.errorContainer.$('[data-test="error"]');
    }

    get errorButton () {
        return this.errorContainer.$('.error-button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
}

export default new loginPage();
