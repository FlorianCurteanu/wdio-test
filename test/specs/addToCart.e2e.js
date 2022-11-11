describe ('Add to cart', () => {
    let inventoryItems;
    let price1, price2, price3;

    before(async () => {
        await browser.setWindowSize(1200, 800);
    });

    it ('should open page', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('.login-box').waitForDisplayed();
    });

    it ('should add username', async () => {
        await $('[data-test="username"]').setValue('standard_user');
        await expect($('[data-test="username"]')).toHaveValue('standard_user');
    });
    
    it ('should add password', async () => {
        await $('[data-test="password"]').setValue('secret_sauce');
        await expect($('[data-test="password"]')).toHaveValue('secret_sauce');
    });

    it('should press Login button', async () => {
        await $('[data-test="login-button"]').click();
        await $('[data-test="login-button"]').waitForDisplayed({reverse: true});
        await $('#inventory_container.inventory_container').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/inventory.html');
    });

    it('should add to cart Sauce Labs Backpack', async () => {
        inventoryItems = await $$('.inventory_list .inventory_item');
        const addToCart = await inventoryItems[0].$('.btn_inventory');
        await (inventoryItems[0]).waitForDisplayed();
        await expect(addToCart).toHaveText('ADD TO CART');
        await (addToCart).click();
        await expect(addToCart).toHaveText('REMOVE');
        await expect($('.shopping_cart_badge')).toHaveText('1');
    });

    it('should add to cart Sauce Labs Bike Light', async () => {
        const addToCartButton = await inventoryItems[1].$('.btn_inventory');
        await (inventoryItems[1]).waitForDisplayed();
        await expect(addToCartButton).toHaveText('ADD TO CART');
        await (addToCartButton).click();
        await expect(addToCartButton).toHaveText('REMOVE');
        await expect($('.shopping_cart_badge')).toHaveText('2');
    });

    it('should remove Sauce Labs Backpack from cart', async () => {
        await (inventoryItems[0].$('.btn_inventory')).click();
        await expect(inventoryItems[0].$('.btn_inventory')).toHaveText('ADD TO CART');
        await expect($('.shopping_cart_badge')).toHaveText('1');
    })

    it('should add to cart Sauce Labs Bolt T-Shirt', async () => {
        await expect(inventoryItems[2].$('.btn_inventory')).toHaveText('ADD TO CART');
        await (inventoryItems[2].$('.btn_inventory')).click();
        await expect(inventoryItems[2].$('.btn_inventory')).toHaveText('REMOVE');
        await expect($('.shopping_cart_badge')).toHaveText('2');
    })

    it('should access shopping cart', async () => {
        await $('a.shopping_cart_link').click();
        await $('#cart_contents_container').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/cart.html');
        await expect($('#header_container .title')).toHaveText('YOUR CART');
        await expect($$('.inventory_item_name')).toBeElementsArrayOfSize(2);
        await expect($('.shopping_cart_badge')).toHaveText('2');
    })

    it('should Continue Shopping', async () => {
        await $('[data-test="continue-shopping"]').click();
        await inventoryItems[0].waitForDisplayed();
    })

    it('should add to cart Sauce Labs Backpack', async () => {
        await (inventoryItems[0].$('.btn#add-to-cart-sauce-labs-backpack')).click();
        await expect($('.shopping_cart_badge')).toHaveText('3');
    });

    it('should access shopping cart', async () => {
        await $('a.shopping_cart_link').click();
        await expect($('.cart_list')).toBeDisplayed();
        await expect($$('.inventory_item_name')).toBeElementsArrayOfSize(3);
        await expect($('.shopping_cart_badge')).toHaveText('3');
    })

    it('should check items details',async () => {
        const cartItems = await $$('.cart_list .cart_item');
        await expect(cartItems[0].$('.cart_quantity')).toHaveText('1');
        await expect(cartItems[0].$('.cart_button')).toHaveText('REMOVE');
        await expect(cartItems[0].$('.inventory_item_name')).toHaveText('Sauce Labs Bike Light');
        await expect(cartItems[0].$('.inventory_item_desc')).toHaveText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.');
        await expect(cartItems[0].$('.inventory_item_price')).toHaveText('$9.99');
        await expect(cartItems[1].$('.cart_quantity')).toHaveText('1');
        await expect(cartItems[1].$('.cart_button')).toHaveText('REMOVE');
        await expect(cartItems[1].$('.inventory_item_name')).toHaveText('Sauce Labs Bolt T-Shirt');
        await expect(cartItems[1].$('.inventory_item_desc')).toHaveText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        await expect(cartItems[1].$('.inventory_item_price')).toHaveText('$15.99');
        await expect(cartItems[2].$('.cart_quantity')).toHaveText('1');
        await expect(cartItems[2].$('.cart_button')).toHaveText('REMOVE');
        await expect(cartItems[2].$('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
        await expect(cartItems[2].$('.inventory_item_desc')).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        await expect(cartItems[2].$('.inventory_item_price')).toHaveText('$29.99');
    })

    it('should check all items details', async () => {
        const productsDetails = [
            {name: 'Sauce Labs Bike Light', price: '$9.99', desc: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."}, 
            {name: 'Sauce Labs Bolt T-Shirt', price: '$15.99', desc: "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."},
            {name: 'Sauce Labs Backpack', price: '$29.99', desc: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."},
        ];
        const cartItems = await $$('.cart_list .cart_item');
        for (const [index, product] of cartItems.entries()) {
            await expect(product.$('.inventory_item_name')).toHaveText(productsDetails[index].name);
            await expect(product.$('.inventory_item_price')).toHaveText(productsDetails[index].price);
            await expect(product.$('.inventory_item_desc')).toHaveText(productsDetails[index].desc);
            await expect(product.$('.cart_button')).toHaveText('REMOVE');
            await expect(product.$('.cart_quantity')).toHaveText('1');
        }
        price1 = await cartItems[0].$('.inventory_item_price').getText();
        price2 = await cartItems[1].$('.inventory_item_price').getText();
        price3 = await cartItems[2].$('.inventory_item_price').getText();
    });

    it('should proceed to your information page on clicking Checkout', async () => {
        await $('[data-test="checkout"]').click();
        await $('#checkout_info_container').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/checkout-step-one.html');
        await expect($('#header_container .title')).toHaveText('CHECKOUT: YOUR INFORMATION');
        await expect($$('.checkout_info input')).toBeElementsArrayOfSize(3);
    })

    it ('should add First Name Last Name Zip Code', async () => {
        await $('[data-test="firstName"]').setValue('Florian');
        await expect($('[data-test="firstName"]')).toHaveValue('Florian');
        await $('[data-test="lastName"]').setValue('Catalin');
        await expect($('[data-test="lastName"]')).toHaveValue('Catalin');
        await $('[data-test="postalCode"]').setValue('101410');
        await expect($('[data-test="postalCode"]')).toHaveValue('101410');
    })

    it('should access CHECKOUT OVERVIEW page on clicking continue', async () => {
        await $('[data-test="continue"]').click();
        await $('.summary_info').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/checkout-step-two.html');
        await expect($('#header_container .title')).toHaveText('CHECKOUT: OVERVIEW');
        await expect($$('.cart_list .cart_item')).toBeElementsArrayOfSize(3);
    })

    it('should check Payment and Shipping and if the final price is correct', async () => {
        await expect($('.summary_info .summary_info_label')).toBeDisplayed();
        await expect($('.summary_info .summary_value_label')).toBeDisplayed();
        const tax = await $('.summary_tax_label').getText();
        const totalPrice = parseFloat(price1.substring(1)) + parseFloat(price2.substring(1)) + parseFloat(price3.substring(1)) + parseFloat(tax.substring(6)); 
        await expect($('.summary_total_label')).toHaveText(`Total: $${totalPrice}`);
    })

    it('should proceed to CHECKOUT: COMPLETE! page on clicking Finish button', async () => {
        await $('[data-test="finish"]').click();
        await $('[data-test="finish"]').waitForDisplayed({reverse: true});
        await $('#checkout_complete_container').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/checkout-complete.html');
        await expect($('#header_container .title')).toHaveText('CHECKOUT: COMPLETE!');
        await expect($('.pony_express')).toBeDisplayed();
        await expect($('.complete-text')).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await expect($('#checkout_complete_container h2')).toHaveText('THANK YOU FOR YOUR ORDER');
    })

    it('should proceed Back To Products page on clicking Back Home button', async () => {
        await $('[data-test="back-to-products"]').click();
        await $('[data-test="back-to-products"]').waitForDisplayed({reverse: true});
        await $('#inventory_container.inventory_container').waitForDisplayed();
        await expect(browser).toHaveUrlContaining('/inventory.html');
        await expect($('.header_secondary_container .title')).toHaveText('PRODUCTS');
    })

    it('should logout on clicking Logout button from burger menu', async () => {
        const menuItems = await $$('.bm-item-list a');
        await $('#react-burger-menu-btn').click();
        await $('.bm-item-list').waitForDisplayed();
        await menuItems[2].waitForClickable();
        await expect(menuItems[2]).toHaveText('LOGOUT');
        await menuItems[2].click();
    })

});