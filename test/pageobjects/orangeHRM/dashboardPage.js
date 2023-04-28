class dashboardPage {
    constructor() {
        this.mainSelector = '#app .oxd-layout';
    }

    get container() {
        return $(this.mainSelector);
    }

    get navigationSidepanel() {
        return this.container.$('.oxd-layout-navigation .oxd-sidepanel nav');
    }

    get menuItems() {
        return this.navigationSidepanel.$$('.oxd-sidepanel-body .oxd-main-menu li');
    }

    menuItemsButton (index) {
        return this.menuItems[index].$('a');
    }

    get layoutContainer() {
        return this.container.$('.oxd-layout-container .oxd-layout-context');
    }

    get dashboardGrid() {
        return this.layoutContainer.$('.oxd-grid-3');
    }

}

export default new dashboardPage();