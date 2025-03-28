import { Page } from '@playwright/test';

export class EbayProductPage {
    public readonly page: Page;
    public readonly productTitle: string = 'h1[itemprop="name"]';
    public readonly addToCartButton: string = 'a[aria-label="In den Warenkorb"]';

    public constructor(page: Page) {
        this.page = page;
    }

    public async getProductTitle(): Promise<string> {
        const title = await this.page.textContent(this.productTitle);
        if (!title) {
            throw new Error('Product title not found');
        }
        return title;
    }

    public async addToCart(): Promise<void> {
        await this.page.click(this.addToCartButton);
    }
}
