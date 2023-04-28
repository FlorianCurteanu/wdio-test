class personalDetails {
    constructor() {
        this.mainSelector = '.orangehrm-background-container';
    }

    get container() {
        return $(this.mainSelector);
    }

    get editPersonalDetails() {
        return this.container.$('.orangehrm-edit-employee');
    }

    get details() {
        return this.container.$$('.oxd-input-group input');
    }

    get selectGender() {
        return this.container.$$('.oxd-radio-wrapper .oxd-radio-input.oxd-radio-input--active.--label-right.oxd-radio-input');
    }

}

export default new personalDetails();