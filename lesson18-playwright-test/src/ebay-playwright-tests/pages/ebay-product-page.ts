import { Page, Locator } from '@playwright/test';

export class EbayProductPage {
    public readonly page: Page;

    private get productTitle(): Locator {
        return this.page.locator('h1[itemprop="name"]');
    }

    private get addToCartButton(): Locator {
        return this.page.locator('a[aria-label="In den Warenkorb"]');
    }

    public constructor(page: Page) {
        this.page = page;
    }

    public async getProductTitle(): Promise<string> {
        await this.productTitle.waitFor({ state: 'visible' });
        const title = await this.productTitle.textContent();
        if (!title) {
            throw new Error('Product title not found');
        }
        return title;
    }

    public async addToCart(): Promise<void> {
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
    }
}
