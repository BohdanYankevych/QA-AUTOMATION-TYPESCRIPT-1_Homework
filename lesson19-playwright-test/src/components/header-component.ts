import { Page, Locator, expect } from '@playwright/test';

export class HeaderComponent {
    public constructor(private readonly page: Page) {}

    public get heroText(): Locator {
        return this.page.locator('#hero-section-brand-heading');
    }

    public async expectToBeVisible(): Promise<void> {
        await expect(this.heroText).toBeVisible();
    }
}
