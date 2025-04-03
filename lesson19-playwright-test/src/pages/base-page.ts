import { Page } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async goto(url: string): Promise<void> {
        await this.page.goto(url);
    }
}
