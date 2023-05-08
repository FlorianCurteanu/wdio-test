class timesheetsPage {
    constructor() {
        this.mainSelector = '#app .oxd-layout-context';
    }

    get container() {
        return $(this.mainSelector);
    }

    get createTimesheetButton() {
        return this.container.$('button.oxd-button');
    }

    get noRecordsFound() {
        return this.container.$('.orangehrm-timesheet-table-body-cell');
    }

    get headerTitle() {
        return this.container.$('.orangehrm-timesheet-header');
    }

    get timesheetForLindaAnderson() {
        return this.container.$('.orangehrm-timesheet-header--title h6');
    }

    get editButton() {
        return this.container.$('button.oxd-button.oxd-button--medium.oxd-button--ghost');
    }

    get timesheetTable() {
        return this.container.$('.orangehrm-timesheet-table');
    }

    get projectInput() {
        return this.container.$('.oxd-autocomplete-wrapper input');
    }

    get projectCocaCola() {
        return this.container.$('.oxd-autocomplete-wrapper .oxd-autocomplete-dropdown');
    }

    get activitySelectionContainer() {
        return this.container.$('.oxd-select-text');
    }

    get activitySelection() {
        return this.container.$$('.oxd-select-dropdown .oxd-select-option');
    }

    getActivityByName(selectActivity) {
        return this.container.$('.oxd-select-dropdown').$(`span=${selectActivity}`);
    }

    get inputForWeekDays() {
        return this.container.$$('.orangehrm-timesheet-table-body-cell .oxd-input');
    }

    get saveButoon() {
        return this.container.$('.oxd-button.oxd-button--medium.oxd-button--secondary');
    }

    get submitButton() {
        return this.container.$('.oxd-button.oxd-button--medium.oxd-button--secondary');
    }

    get actionForm() {
        return this.container.$('.oxd-form-actions');
    }

    get approveButton() {
        return this.container.$('.oxd-button.oxd-button--medium.oxd-button--success.orangehrm-left-space');
    }
    
    get resetButton() {
        return this.container.$('oxd-button oxd-button--medium oxd-button--ghost');
    }

    get trashButton() {
        return this.container.$('.oxd-icon-button.orangehrm-timesheet-icon .oxd-icon.bi-trash');
    }

    get actionsTable() {
        return this.container.$('.oxd-table-cell');
    }

}

export default new timesheetsPage();