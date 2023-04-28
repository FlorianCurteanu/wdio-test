class PIMpage {
    constructor() {
        this.mainSelector = '#app .oxd-layout';
    }

    get container() {
        return $(this.mainSelector);
    }

    get searchEmployeeInformation() {
        return this.container.$('.oxd-table-filter');
    }

    get topbarTabs() {
        return this.container.$$('.oxd-topbar-body-nav li');
    }

    managementTabs (index) {
        return this.topbarTabs[index].$('a');
    }

    get addEmployeeContainer() {
        return this.container.$('.orangehrm-card-container');
    }

    get inputFirstname() {
        return this.container.$('.oxd-input.oxd-input--active.orangehrm-firstname');
    }
    
    get inputMiddlename() {
        return this.container.$('.oxd-input.oxd-input--active.orangehrm-middlename');
    }

    get inputLastname() {
        return this.container.$('.oxd-input.oxd-input--active.orangehrm-lastname');
    }

    get employeeId() {
        return this.container.$('.oxd-grid-2 .oxd-input.oxd-input--active');
    }

    get saveButton() {
        return this.container.$('.oxd-button.oxd-button--medium.oxd-button--secondary');
    }

    get cancelButton() {
        return this.container.$('.oxd-button.oxd-button--medium.oxd-button--ghost');
    }

    async addEmployeeFullName (firstname, middlename, lastname) {
        await this.inputFirstname.setValue(firstname);
        await this.inputMiddlename.setValue(middlename);
        await this.inputLastname.setValue(lastname);
    }

}

export default new PIMpage();