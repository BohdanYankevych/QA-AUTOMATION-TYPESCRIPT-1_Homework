import { Page, Locator } from '@playwright/test';
import { SearchComponent } from '../components/search-component';

export class GithubSearchResultsPage {
    private readonly page: Page;
    public readonly search: SearchComponent;
    public readonly resultItems: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.search = new SearchComponent(page);
        this.resultItems = this.page.locator('[data-testid="results-list"]');
    }

    public async getResultsList(): Promise<void> {
        await this.resultItems.waitFor();
    }
}
