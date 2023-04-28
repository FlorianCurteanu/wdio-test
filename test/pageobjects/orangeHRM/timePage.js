class timePage {
    constructor() {
        this.mainSelector = '#app .orangehrm-background-container';
    }

    get container() {
        return $(this.mainSelector);
    }

    get viewButton() {
        return this.container.$('.orangehrm-card-container .oxd-button');
    }

    get typeEmployeeNameContainer() {
        return this.container.$('.orangehrm-card-container div.oxd-autocomplete-wrapper');
    }

    get employeeNameContainer() {
        return this.typeEmployeeNameContainer.$('.oxd-autocomplete-text-input input[placeholder="Type for hints..."]');
    }

    get typeEmployeeName() {
        return this.typeEmployeeNameContainer.$('.oxd-autocomplete-text-input .oxd-autocomplete-text-input--before');
    }

    get autocompleteOptions() {
        return this.typeEmployeeNameContainer.$$('.oxd-autocomplete-dropdown .oxd-autocomplete-option');
    }

    getAutocompleteOptionByName(employeeName) {
        return this.typeEmployeeNameContainer.$('.oxd-autocomplete-dropdown').$(`.oxd-autocomplete-option=${employeeName}`);
    }

}

export default new timePage();