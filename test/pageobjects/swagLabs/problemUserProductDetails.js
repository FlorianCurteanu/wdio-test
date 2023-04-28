class pUproductDetails {
    constructor() {
        this.mainSelector = '#root #page_wrapper #contents_wrapper';
    }

    get container() {
        return $(this.mainSelector);
    }

    get itemContainer() {
        return this.container.$('#inventory_item_container');
    }

    get inventoryDetails() {
        return this.itemContainer.$('.inventory_details');
    }

    get inventoryDetailsContainer() {
        return this.inventoryDetails.$('.inventory_details_container');
    }

    get detailDescContainer() {
        return this.inventoryDetailsContainer.$('.inventory_details_desc_container');

    }
    get itemName() {
        return this.detailDescContainer.$('.inventory_details_name.large_size');
    }

    get itemLargeDesc() {
        return this.detailDescContainer.$('.inventory_details_desc.large_size');
    }

    get itemPrice() {
        return this.detailDescContainer.$('.inventory_details_price');
    }

    get itemImage() {
        return this.inventoryDetailsContainer.$('#inventory_item_container img');
    }

    get headerSecondaryContainer() {
        return this.container.$('.header_container .header_secondary_container');
    }

    get backToProductsButton () {
        return this.headerSecondaryContainer.$('#back-to-products');
    }

}

export default new pUproductDetails();