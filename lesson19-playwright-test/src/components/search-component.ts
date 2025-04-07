import { Locator, expect } from '@playwright/test';

export class SearchComponent {
    private readonly searchOrJumpToButton: Locator;
    private readonly searchInput: Locator;

    public constructor(baseLocator: Locator) {
        this.searchOrJumpToButton = baseLocator.locator('button[aria-label="Search or jump to…"]');
        this.searchInput = baseLocator.locator('input[name="query-builder-test"]');
    }

    public async search(query: string): Promise<void> {
        await this.searchOrJumpToButton.click();
        await expect(this.searchInput).toBeVisible();
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');
    }
}

