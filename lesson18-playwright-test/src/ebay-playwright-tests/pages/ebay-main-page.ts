import { Page, Locator } from '@playwright/test';
import { EbaySearchResultsPage } from './ebay-search-results-page';

export class EbayMainPage {
    public readonly page: Page;

    private get searchInput(): Locator {
        return this.page.locator('input[aria-label="Suche"]');
    }

    private get searchButton(): Locator {
        return this.page.locator('input[type="submit"]');
    }

    public constructor(page: Page) {
        this.page = page;
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.ebay.com/');
        await this.searchInput.waitFor({ state: 'visible' });
    }

    public async searchForItem(item: string): Promise<EbaySearchResultsPage> {
        await this.searchInput.fill(item);
        await this.searchButton.click();
        await this.page.waitForSelector('.s-item__title'); // Очікуємо результати пошуку
        return new EbaySearchResultsPage(this.page);
    }
}
