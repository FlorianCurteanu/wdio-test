import loginHRM from '../../pageobjects/orangeHRM/loginPage';
import dashboardPage from '../../pageobjects/orangeHRM/dashboardPage';
import PIMpage from '../../pageobjects/orangeHRM/PIM/PIMpage';
import personalDetails from '../../pageobjects/orangeHRM/PIM/personalDetailsPage';

describe ('Create Employee Personal File', () => {

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

    it ('should navigate to PIM page', async () => {
        await dashboardPage.menuItemsButton(1).click();
        await dashboardPage.dashboardGrid.waitForDisplayed({reverse: true});
    });

    it ('should navigate to Add Employee tab', async () => {
        await PIMpage.searchEmployeeInformation.waitForDisplayed();
        await PIMpage.managementTabs(2).click();
    });

    it ('should add employee full name', async () => {
        await PIMpage.addEmployeeContainer.waitForDisplayed();
        await PIMpage.addEmployeeFullName ('Linda', 'Jane', 'Anderson');
        await PIMpage.employeeId.addValue('0');
        await expect(PIMpage.inputFirstname).toHaveValue('Linda');
        await expect(PIMpage.inputMiddlename).toHaveValue('Jane');
        await expect(PIMpage.inputLastname).toHaveValue('Anderson');
    });

    it ('should save employee full name', async () => {
        await PIMpage.saveButton.click();
        await PIMpage.cancelButton.waitForDisplayed({reverse: true});
        await personalDetails.editPersonalDetails.waitForDisplayed();
    });

    it ('should add employee details', async () => {
        const employeeDetails = personalDetails.details;
        await employeeDetails[4].setValue('Johnny');
        await employeeDetails[5].setValue('19800313');
        await employeeDetails[6].setValue('91021002');
        await employeeDetails[7].setValue('2025-05-15');
        await employeeDetails[8].setValue('DL1150520');
        await employeeDetails[9].setValue('987654321');
        await employeeDetails[10].setValue('1980-03-13');
        await employeeDetails[13].setValue('Satisfied');
        await personalDetails.selectGender[1].click();
    });
 
});