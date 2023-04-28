import loginHRM from '../../pageobjects/orangeHRM/loginPage';
import dashboardPage from '../../pageobjects/orangeHRM/dashboardPage';
import timePage from '../../pageobjects/orangeHRM/timePage';
import timesheetsPage from '../../pageobjects/orangeHRM/timesheetsPage';

describe ('Employee Timesheet', () => {

    before(async () => {
        await browser.setWindowSize(1600, 1000);
    });

    it ('should open login page', async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginHRM.loginContainer.waitForDisplayed();
    });

    it ('should login in application', async () => {
        await loginHRM.login ('Admin', 'admin123');
        await dashboardPage.dashboardGrid.waitForDisplayed();
    });

    it ('should navigate to time page', async () => {
        await dashboardPage.menuItemsButton(3).click();
        await dashboardPage.dashboardGrid.waitForDisplayed({reverse: true});
    });

    it ('should select an employee name from dropdown list', async () => {
        await timePage.container.waitForDisplayed();
        await timePage.employeeNameContainer.addValue('Anderson');
        await expect(timePage.autocompleteOptions).toBeElementsArrayOfSize(2);
        await timePage.getAutocompleteOptionByName('Linda Jane Anderson').click();
    });

    it ('should press view button', async () => {
        await timePage.viewButton.click();
        await timesheetsPage.headerTitle.waitForDisplayed();
    });

    it ('should click on Edit Button', async () => {
        await timesheetsPage.editButton.click();
        await expect(timesheetsPage.timesheetForLindaAnderson).toHaveText('Timesheet for Linda Anderson');
        await timesheetsPage.timesheetTable.waitForDisplayed();
        await timesheetsPage.trashButton.click();
    });

    it ('should select "Coca-Cola" project', async () => {
        await timesheetsPage.projectInput.addValue('Coca-Cola');
        await expect(timesheetsPage.projectCocaCola).toHaveTextContaining('Coca-Cola');
        await timesheetsPage.projectCocaCola.click();
        await expect(timesheetsPage.projectInput).toHaveValueContaining('The Coca-Cola Company - Coke - Phase 1');
    });

    it ('should select activity Demonstration', async () => {
        await timesheetsPage.activitySelectionContainer.click();
        await expect(timesheetsPage.activitySelection).toBeElementsArrayOfSize(10);
        await timesheetsPage.getActivityByName('Demonstration').click();
    });

    it ('should fill hours for each day', async () => {
        const inputDay = await timesheetsPage.inputForWeekDays;
        await (inputDay[0]).addValue('8');
        await expect(inputDay[0]).toHaveValue('8');
        await (inputDay[1]).addValue('7.5');
        await expect(inputDay[1]).toHaveValue('7.5');
        await (inputDay[2]).addValue('4.5');
        await expect(inputDay[2]).toHaveValue('4.5');
        await (inputDay[3]).addValue('6.5');
        await expect(inputDay[3]).toHaveValue('6.5');
        await (inputDay[4]).addValue('7');
        await expect(inputDay[4]).toHaveValue('7');
        await (inputDay[5]).addValue('3');
        await expect(inputDay[5]).toHaveValue('3');
        await (inputDay[6]).addValue('6');
        await expect(inputDay[6]).toHaveValue('6');
    });

    it ('should save the data', async () => {
        await timesheetsPage.saveButoon.click();
    });

    it ('should approve timesheet', async () => {
        await timesheetsPage.actionForm.waitForDisplayed();
        await timesheetsPage.approveButton.click();
    });

})