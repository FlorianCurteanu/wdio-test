class checkoutComplete {
    constructor() {
        this.mainSelector = '#contents_wrapper #checkout_complete_container';
    }

    get checkoutCompleteContainer() {
        return $(this.mainSelector);
    }

    get container () {
        return this.checkoutCompleteContainer.$('.checkout_complete_container');
    }
    
    get header () {
        return this.checkoutCompleteContainer.$('#checkout_complete_container h2');
    }

    get ponyExpressImage () {
        return this.checkoutCompleteContainer.$('.checkout_complete_container img');
    }

    get completeText () {
        return this.checkoutCompleteContainer.$('.complete-text');
    }

    get backHomeButton () {
        return this.checkoutCompleteContainer.$('[data-test="back-to-products"]');
    }

}

export default new checkoutComplete();
