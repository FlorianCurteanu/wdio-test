class header {
    constructor() {
        this.mainSelector = '#header_container';
    }

    get headerContainer() {
        return $(this.mainSelector);
    }

    get shoppingCart () {
        return this.headerContainer.$('a.shopping_cart_link');
    }

    get shopCartBadge () {
        return this.headerContainer.$('.shopping_cart_badge');
    }

    get headerTitle () {
        return this.headerContainer.$('.header_secondary_container .title');
    }

    get burgerButton () {
        return this.headerContainer.$('#react-burger-menu-btn');
    }

    get burgerButtonList () {
        return this.headerContainer.$('.bm-item-list a');
    }

    get burgerButtonItemList () {
        return this.headerContainer.$$('.bm-item-list a');
    }

}

export default new header();
