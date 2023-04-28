class Footer {
    constructor() {
        this.mainSelector = '.footer';
    }

    get footerContainer() {
        return $(this.mainSelector);
    }
    
    get social () {
        return this.footerContainer.$('.social');
    }

    get copy () {
        return this.footerContainer.$('.footer_copy');
    }

    get robot () {
        return this.footerContainer.$('.footer_robot');
    }

}

export default new Footer();
