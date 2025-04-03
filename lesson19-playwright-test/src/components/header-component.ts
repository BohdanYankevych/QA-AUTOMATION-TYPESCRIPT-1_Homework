import { Page, Locator, expect } from '@playwright/test';

export class HeaderComponent {
    private page: Page;
    private heroText: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.heroText = page.locator('#hero-section-brand-heading');
    }

    public async findHeader(): Promise<void> {
        await expect(this.heroText).toBeVisible();
    }
}
