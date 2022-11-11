describe ('LoginSwagLabs', () => {
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

    it('should contain header elements', async () => {
        await expect($('.bm-burger-button')).toBeDisplayed();
        await expect($('.app_logo')).toBeDisplayed();
        await expect($('.shopping_cart_link')).toBeDisplayed();
        await expect($('[data-test="product_sort_container"]')).toBeDisplayed();
        await expect($('.title')).toBeDisplayed();
    });

    it('should diplay products', async () => {
        await expect($$('.inventory_item')).toBeElementsArrayOfSize(6);
    });

    it('should diplay first item elements', async () => {
        const inventoryItems = await $$('.inventory_item');
        await expect(inventoryItems[0].$('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
        await expect($$('.inventory_item')[0].$('.inventory_item_price')).toHaveText('$29.99');
        await expect($('[data-test="add-to-cart-sauce-labs-backpack"]')).toHaveText('ADD TO CART');
        await expect($$('.inventory_item')[0].$('.inventory_item_desc')).toBeDisplayed();
        await expect($$('.inventory_item')[0].$('#item_4_img_link img')).toBeDisplayed();
    });

    it('should diplay last item elements', async () => {
        await expect($$('.inventory_item')[5].$('.inventory_item_name')).toHaveText('Test.allTheThings() T-Shirt (Red)');
        await expect($$('.inventory_item')[5].$('.inventory_item_price')).toHaveText('$15.99');
        await expect($('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')).toHaveText('ADD TO CART');
        await expect($$('.inventory_item')[5].$('.inventory_item_desc')).toBeDisplayed();
        await expect($$('.inventory_item')[5].$('#item_3_img_link img')).toBeDisplayed();
    });

    it('should check all items', async () => {
        const productsDetails = [
            {name: 'Sauce Labs Backpack', price: '$29.99', desc: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."},
            {name: 'Sauce Labs Bike Light', price: '$9.99', desc: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."}, 
            {name: 'Sauce Labs Bolt T-Shirt', price: '$15.99', desc: "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."},
            {name: 'Sauce Labs Fleece Jacket', price: '$49.99', desc: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.'},
            {name: 'Sauce Labs Onesie', price: '$7.99', desc: "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel."},
            {name: 'Test.allTheThings() T-Shirt (Red)', price: '$15.99', desc: "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."}
        ];
        // const objectTest = {
        //     colour: 'red',
        //     car: 'Dacia',
        //     year: 1987,
        //     itpPass: false,
        // };
        // console.log('==========', `Masina mea este marca ${objectTest.car} de culoare ${objectTest.colour} fabricata in anul ${objectTest.year} si ${objectTest.itpPass ? 'are' : 'nu are'} ITP-ul facut .`);
        // console.log('==========', productsDetails[3].desc);
        const productItems = await $$('.inventory_item');
        for (const [index, product] of productItems.entries()) {
            // console.log('============', productsDetails[index].price);
            // console.log('=2=', await product.$('.inventory_item_price').getText());
            await expect(product.$('.inventory_item_name')).toHaveText(productsDetails[index].name);
            await expect(product.$('.inventory_item_price')).toHaveText(productsDetails[index].price);
            await expect(product.$('.pricebar button.btn_inventory')).toHaveText('ADD TO CART');
            await expect(product.$('.inventory_item_desc')).toHaveText(productsDetails[index].desc);
            await expect(product.$('.inventory_item_img img')).toBeDisplayed();
        }
    });

});