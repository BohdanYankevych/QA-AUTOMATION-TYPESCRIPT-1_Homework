import { Page, expect } from '@playwright/test';
import { HeaderComponent } from '../components/header-component';
import { SearchComponent } from '../components/search-component';

export class GithubMainPage {
    private readonly page: Page;
    public readonly headerComponent: HeaderComponent;
    public readonly searchComponent: SearchComponent;

    public constructor(page: Page) {
        this.page = page;
        this.headerComponent = new HeaderComponent(this.page);
        this.searchComponent = new SearchComponent(this.page.locator('header'));
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://github.com');
        await expect(this.page.locator('#hero-section-brand-heading')).toBeVisible();
    }
}


