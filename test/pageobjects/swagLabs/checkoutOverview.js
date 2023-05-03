class checkoutOverview {
    constructor() {
        this.mainSelector = '#checkout_summary_container';
    }

    get checkoutOverviewContainer() {
        return $(this.mainSelector);
    }
    
    get cartItemsList () {
        return this.checkoutOverviewContainer.$$('.cart_list .cart_item');
    }

    getItemPrice (index) {
        return this.cartItemsList[index].$('.inventory_item_price');
    }

    async getTotalPrice () {
        const price1 = await this.getItemPrice(0).getText();
        const price2 = await this.getItemPrice(1).getText();
        const price3 = await this.getItemPrice(2).getText();
        const tax = await this.summaryTax.getText();
        return parseFloat(price1.substring(1)) + parseFloat(price2.substring(1)) + parseFloat(price3.substring(1)) + parseFloat(tax.substring(6));
    }

    get summary () {
        return this.checkoutOverviewContainer.$('.summary_info');
    }

    get summaryInfo () {
        return this.checkoutOverviewContainer.$('.summary_info .summary_info_label');
    }

    get summaryValue () {
        return this.checkoutOverviewContainer.$('.summary_info .summary_value_label');
    }

    get summaryTax () {
        return this.checkoutOverviewContainer.$('.summary_tax_label');
    }

    get summaryTotal () {
        return this.checkoutOverviewContainer.$('.summary_total_label');
    }

    get finishButton () {
        return this.checkoutOverviewContainer.$('[data-test="finish"]');
    }

}

export default new checkoutOverview();
