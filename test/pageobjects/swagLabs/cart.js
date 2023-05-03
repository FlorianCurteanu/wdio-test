class cart {
    constructor() {
        this.mainSelector = '#cart_contents_container';
    }

    get cartContainer() {
        return $(this.mainSelector);
    }

    get testDataProducts() {
        return [
            {name: 'Sauce Labs Bike Light', price: '$9.99', desc: "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."}, 
            {name: 'Sauce Labs Bolt T-Shirt', price: '$15.99', desc: "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt."},
            {name: 'Sauce Labs Backpack', price: '$29.99', desc: "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."},
        ];
    }

    getCartQuantity (index) {
        return this.cartItemsList[index].$('.cart_quantity');
    }

    getCartButton (index) {
        return this.cartItemsList[index].$('.cart_button');
    }

    getItemName (index) {
        return this.cartItemsList[index].$('.inventory_item_name');
    }

    getItemDesc (index) {
        return this.cartItemsList[index].$('.inventory_item_desc');
    }

    getItemPrice (index) {
        return this.cartItemsList[index].$('.inventory_item_price');
    }

    get continueShopping() {
        return this.cartContainer.$('[data-test="continue-shopping"]');
    }

    get cartItemsList() {
        return this.cartContainer.$$('.cart_list .cart_item');
    }

    get quantity() {
        return this.cartContainer.$('.cart_item .cart_quantity');
    }

    get checkoutButton() {
        return this.cartContainer.$('[data-test="checkout"]');
    }

}

export default new cart();
