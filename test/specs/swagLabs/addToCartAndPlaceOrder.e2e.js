import login from '../../pageobjects/swagLabs/login';
import header from '../../pageobjects/swagLabs/header';
import footer from '../../pageobjects/swagLabs/footer';
import inventory from '../../pageobjects/swagLabs/inventory';
import cart from '../../pageobjects/swagLabs/cart';
import checkout from '../../pageobjects/swagLabs/checkout';
import checkoutOverview from '../../pageobjects/swagLabs/checkoutOverview';
import checkoutComplete from '../../pageobjects/swagLabs/checkoutComplete';

describe ('Add To Cart And Place Order', () => {
    let price1, price2, price3;

    before(async () => {
        await browser.setWindowSize(1200, 800);
    });

    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await login.loginContainer.waitForDisplayed();
    });

    it ('should display products after Login', async () => {
        await login.login ('standard_user', 'secret_sauce');
        await inventory.container.waitForDisplayed();
    });

    it('should display products page details', async () => {
        await expect(browser).toHaveUrlContaining('/inventory.html');
        await expect(header.headerTitle).toHaveText('Products');
        await expect(footer.social).toBeDisplayed();
        await expect(footer.copy).toBeDisplayed();
    });

    it('should add to cart Sauce Labs Backpack', async () => {
        const addToCartButton = await inventory.addToCartButton(0);
        await inventory.inventoryItems[0].waitForDisplayed();
        await expect(addToCartButton).toHaveText('Add to cart');
        await addToCartButton.click();
        await expect(addToCartButton).toHaveText('Remove');
        await expect(header.shopCartBadge).toHaveText('1');
    });

    it('should add to cart Sauce Labs Bike Light', async () => {
        const addToCartButton = await inventory.addToCartButton(1);
        await inventory.inventoryItems[1].waitForDisplayed();
        await expect(addToCartButton).toHaveText('Add to cart');
        await addToCartButton.click();
        await expect(addToCartButton).toHaveText('Remove');
        await expect(header.shopCartBadge).toHaveText('2');
    });

    it('should remove Sauce Labs Backpack from cart', async () => {
        await inventory.addToCartButton(0).click();
        await expect(inventory.addToCartButton(0)).toHaveText('Add to cart');
        await expect(header.shopCartBadge).toHaveText('1');
    });

    it('should add to cart Sauce Labs Bolt T-Shirt', async () => {
        await expect(inventory.addToCartButton(2)).toHaveText('Add to cart');
        await inventory.addToCartButton(2).click();
        await expect(inventory.addToCartButton(2)).toHaveText('Remove');
        await expect(header.shopCartBadge).toHaveText('2');
    });

    it('should access shopping cart', async () => {
        await header.shoppingCart.click();
        await cart.cartContainer.waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/cart.html');
        await expect(header.headerTitle).toHaveText('Your Cart');
        await expect(cart.cartItemsList).toBeElementsArrayOfSize(2);
        await expect(header.shopCartBadge).toHaveText('2');
    });

    it('should Continue Shopping', async () => {
        await cart.continueShopping.click();
        await inventory.inventoryItems[0].waitForDisplayed();
    });

    it('should add to cart Sauce Labs Backpack', async () => {
        await inventory.addToCartButton(0).click();
        await expect(header.shopCartBadge).toHaveText('3');
    });

    it('should access shopping cart', async () => {
        await header.shoppingCart.click();
        await expect(cart.cartContainer).toBeDisplayed();
        await expect(cart.cartItemsList).toBeElementsArrayOfSize(3);
        await expect(header.shopCartBadge).toHaveText('3');
    });

    it('should check items details',async () => {
        await expect(cart.getCartQuantity(0)).toHaveText('1');
        await expect(cart.getCartButton(0)).toHaveText('Remove');
        await expect(cart.getItemName(0)).toHaveText('Sauce Labs Bike Light');
        await expect(cart.getItemDesc(0)).toHaveText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
        await expect(cart.getItemPrice(0)).toHaveText('$9.99');
        await expect(cart.getCartQuantity(1)).toHaveText('1');
        await expect(cart.getCartButton(1)).toHaveText('Remove');
        await expect(cart.getItemName(1)).toHaveText('Sauce Labs Bolt T-Shirt');
        await expect(cart.getItemDesc(1)).toHaveText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        await expect(cart.getItemPrice(1)).toHaveText('$15.99');
        await expect(cart.getCartQuantity(2)).toHaveText('1');
        await expect(cart.getCartButton(2)).toHaveText('Remove');
        await expect(cart.getItemName(2)).toHaveText('Sauce Labs Backpack');
        await expect(cart.getItemDesc(2)).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(cart.getItemPrice(2)).toHaveText('$29.99');
    });

    it('should check all items details', async () => {
        const cartItems = await cart.cartItemsList;
        for (const [index, product] of cartItems.entries()) {
            await expect(product.$('.inventory_item_name')).toHaveText(cart.testDataProducts[index].name);
            await expect(product.$('.inventory_item_price')).toHaveText(cart.testDataProducts[index].price);
            await expect(product.$('.inventory_item_desc')).toHaveText(cart.testDataProducts[index].desc);
            await expect(product.$('.cart_button')).toHaveText('Remove');
            await expect(product.$('.cart_quantity')).toHaveText('1');
        };
        price1 = await cartItems[0].$('.inventory_item_price').getText();
        price2 = await cartItems[1].$('.inventory_item_price').getText();
        price3 = await cartItems[2].$('.inventory_item_price').getText();
    });

    it('should proceed to your information page on clicking Checkout', async () => {
        await cart.checkoutButton.click();
        await checkout.infoContainer.waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/checkout-step-one.html');
        await expect(header.headerTitle).toHaveText('Checkout: Your Information');
        await expect(checkout.infoInput).toBeElementsArrayOfSize(3);
    });

    it('should add customer details', async () => {
        await checkout.customerInfo ('Florian', 'Catalin', '101410');
    });

    it('should access CHECKOUT OVERVIEW page on clicking continue', async () => {
        await checkout.continueButton.click();
        await checkoutOverview.summary.waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/checkout-step-two.html');
        await expect(header.headerTitle).toHaveText('Checkout: Overview');
        await expect(checkoutOverview.cartItemsList).toBeElementsArrayOfSize(3);
    });

    it('should check Payment and Shipping and if the final price is correct', async () => {
        await expect(checkoutOverview.summaryInfo).toBeDisplayed();
        await expect(checkoutOverview.summaryValue).toBeDisplayed();
        const tax = await checkoutOverview.summaryTax.getText();
        const totalPrice = await checkoutOverview.getTotalPrice(); 
        await expect(checkoutOverview.summaryTotal).toHaveText(`Total: $${totalPrice}`);
    });

    it('should proceed to CHECKOUT: COMPLETE! page on clicking Finish button', async () => {
        await checkoutOverview.finishButton.click();
        await expect(browser).toHaveUrlContaining('/checkout-complete.html');
        await expect(header.headerTitle).toHaveText('Checkout: Complete!');
        await expect(checkoutComplete.ponyExpressImage).toBeDisplayed();
        await expect(checkoutComplete.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect(checkoutComplete.header).toHaveText('Thank you for your order!');
    });

    it('should proceed Back To Products page on clicking Back Home button', async () => {
        await checkoutComplete.backHomeButton.click();
        await inventory.inventoryList.waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/inventory.html');
        await expect(header.headerTitle).toHaveText('Products');
    });

    it('should logout on clicking Logout button from burger menu', async () => {
        const menuItems = await header.burgerButtonItemList;
        await header.burgerButton.click();
        await header.burgerButtonList.waitForDisplayed();
        await menuItems[2].waitForClickable();
        await expect(menuItems[2]).toHaveText('Logout');
        await menuItems[2].click();
    });

});