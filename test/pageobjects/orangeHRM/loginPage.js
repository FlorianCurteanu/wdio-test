class loginHRM {
    constructor() {
        this.mainSelector = '.orangehrm-login-form';
    }

    get loginContainer() {
        return $(this.mainSelector);
    }
    
    get inputUsername () {
        return this.loginContainer.$('.oxd-form .oxd-form-row .oxd-input-group div [name="username"]');
    }

    get inputPassword () {
        return this.loginContainer.$('.oxd-form .oxd-form-row .oxd-input-group div [name="password"]');
    }

    get loginButton () {
        return this.loginContainer.$('.oxd-form .oxd-form-actions.orangehrm-login-action button');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

}

export default new loginHRM();
