import { Page, Locator } from '@playwright/test';
import { EbayProductPage } from './ebay-product-page';

export class EbaySearchResultsPage {
    public readonly page: Page;

    private get resultItems(): Locator {
        return this.page.locator('.s-item__title');
    }

    private get firstProductLink(): Locator {
        return this.page.locator('.s-item__link').first();
    }

    public constructor(page: Page) {
        this.page = page;
    }

    public async getFirstProductTitle(): Promise<string> {
        await this.resultItems.first().waitFor({ state: 'visible' });
        return await this.resultItems.first().textContent() ?? '';
    }

    public async openFirstProduct(): Promise<EbayProductPage> {
        await this.firstProductLink.waitFor({ state: 'visible' });
        await this.firstProductLink.click();
        return new EbayProductPage(this.page);
    }
    public getResultItems(): Locator {
        return this.resultItems;
    }
}
