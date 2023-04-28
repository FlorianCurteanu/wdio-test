class Checkout {
    constructor() {
        this.mainSelector = '#contents_wrapper';
    }

    get checkoutContainer() {
        return $(this.mainSelector);
    }
    
    get infoContainer () {
        return this.checkoutContainer.$('#checkout_info_container');
    }

    get infoInput () {
        return this.checkoutContainer.$$('.checkout_info input');
    }

    get firstName () {
        return this.checkoutContainer.$('[data-test="firstName"]');
    }

    get lastName () {
        return this.checkoutContainer.$('[data-test="lastName"]');
    }

    get postalCode () {
        return this.checkoutContainer.$('[data-test="postalCode"]');
    }

    get continueButton () {
        return this.checkoutContainer.$('.checkout_buttons #continue');
    }

    async customerInfo (firstName, lastName, postalCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
    }

}

export default new Checkout();
