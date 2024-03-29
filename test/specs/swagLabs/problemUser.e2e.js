import inventory from '../../pageobjects/swagLabs/inventory';
import loginPage from '../../pageobjects/swagLabs/login';
import productDetails from '../../pageobjects/swagLabs/productDetails';

describe ('Problem User', () => {
    let productName;
    let productDescription;
    let productPrice;
    let productImageSrc;

    before(async () => {
        await browser.setWindowSize(1600, 1000);
    });

    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginPage.loginContainer.waitForDisplayed();
    });

    it ('should display products after Login', async () => {
        await loginPage.login ('problem_user', 'secret_sauce');
        await inventory.container.waitForDisplayed();
        productName = await inventory.getItemNameButton(0).getText();
        productDescription = await inventory.getItemDesc(0).getText();
        productPrice = await inventory.getItemPriceBar(0).getText();
        productImageSrc = await inventory.getItemImage(0).getAttribute('src');
    });

    it ('should access item details on clicking item name', async () => {
        await inventory.getItemNameButton(0).click();
        await productDetails.container.waitForDisplayed();
        await productDetails.backToProductsButton.click();
        await inventory.container.waitForDisplayed();
    });

    it ('should access item details on clicking item image', async () => {
        await inventory.getItemImage(0).click();
        await productDetails.container.waitForDisplayed();
    });

    // to be unskiped when bug is fixed
    xit ('should check item name', async () => {
        await expect(await productDetails.itemName.getText()).toBe(productName);
    });

    // to be unskiped when bug is fixed
    xit ('should check item description', async () => {
        await expect(await productDetails.itemLargeDesc.getText()).toBe(productDescription);
    });

    // to be unskiped when bug is fixed
    xit ('should check item price', async () => {
        await expect(await productDetails.itemPrice.getText()).toBe(productPrice);
    });

    // to be unskiped when bug is fixed
    xit ('should check item image', async () => {
        await expect(await productDetails.itemImage.getAttribute('src')).toBe(productImageSrc);
    });

});