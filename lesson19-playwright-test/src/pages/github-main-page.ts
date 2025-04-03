import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/header-component';
import { SearchComponent } from '../components/search-component';

export class GithubMainPage {
    private readonly page: Page;
    public readonly headerComponent: HeaderComponent;
    public readonly searchComponent: SearchComponent;

    public constructor(page: Page) {
        this.page = page;
        this.headerComponent = new HeaderComponent(page);
        this.searchComponent = new SearchComponent(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://github.com');
    }
}
