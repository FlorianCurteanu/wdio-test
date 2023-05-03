class inventory {
    constructor() {
        this.mainSelector = '#inventory_container #inventory_container';
    }

    get container() {
        return $(this.mainSelector);
    }

    get inventoryItems() {
        return this.container.$$('.inventory_list .inventory_item');
    }

    get inventoryList () {
        return this.container.$('.inventory_list');
    }
   
    addToCartButton (index) {
        return this.inventoryItems[index].$('.btn_inventory');
    }

    getItemNameButton(index) {
        return this.inventoryItems[index].$('.inventory_item_description .inventory_item_label a');
    }

    getItemDesc(index) {
        return this.inventoryItems[index].$('.inventory_item_description .inventory_item_label .inventory_item_desc');
    }

    getItemPriceBar(index) {
        return this.inventoryItems[index].$('.inventory_item_description .pricebar div.inventory_item_price');
    }

    get itemButton() {
        return this.itemPriceBar.$('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    getItemImage(index) {
        return this.inventoryItems[index].$('.inventory_item_img img');
    }


}

export default new inventory();
