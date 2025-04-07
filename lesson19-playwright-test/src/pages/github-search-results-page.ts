import { Page, Locator, expect } from '@playwright/test';
import { SearchComponent } from '../components/search-component';

export class GithubSearchResultsPage {
    private readonly page: Page;
    public readonly search: SearchComponent;

    public constructor(page: Page) {
        this.page = page;
        this.search = new SearchComponent(this.page.locator('header'));
    }

    public get resultItems(): Locator {
        return this.page.locator('[data-testid="results-list"]');
    }

    public async expectResultsToBeVisible(): Promise<void> {
        await expect(this.resultItems).toBeVisible();
    }
}
