class eBayPage {
    private searchInput: string = '#gh-ac';
    private goodsSelector: string = '.s-item__title';
    private priceSelector: string = '.s-item__price';

    async open(): Promise<void> {
        await browser.url('https://www.ebay.com/');
    }

    async searchForProduct(product: string): Promise<void> {
        await $(this.searchInput).waitForDisplayed();
        await $(this.searchInput).setValue(product);
        await browser.keys('Enter');
    }

    async checkGoodsForLaptop(): Promise<boolean> {
        await $(this.goodsSelector).waitForDisplayed();
        const goods = await $$(this.goodsSelector);
        for (const good of goods) {
            const text = await good.getText();
            if (text.toLowerCase().includes('laptop')) {
                return true;
            }
        }
        return false;
    }

    async checkPrices(): Promise<boolean> {
        const prices = await $$(this.priceSelector);
        return prices.length > 0;
    }

    async checkPriceFormat(): Promise<boolean> {
        const prices = await $$(this.priceSelector);
        for (const price of prices) {
            const priceText = await price.getText();
            if (!priceText.match(/^\$\d+/)) {
                return false;
            }
        }
        return true;
    }
}

export default new eBayPage();
