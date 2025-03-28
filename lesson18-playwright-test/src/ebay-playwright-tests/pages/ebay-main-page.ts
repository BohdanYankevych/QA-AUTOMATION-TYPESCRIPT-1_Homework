import { Page } from '@playwright/test';

export class EbayMainPage {
    public readonly page: Page;
    public readonly searchInput: string = 'input[aria-label="Suche"]';
    public readonly searchButton: string = 'input[type="submit"]';

    public constructor(page: Page) {
        this.page = page;
    }

    public async goto(): Promise<void> {
        await this.page.goto('/');
    }

    public async searchForItem(item: string): Promise<void> {
        await this.page.fill(this.searchInput, item);
        await this.page.click(this.searchButton);
    }
}
