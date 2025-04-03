import { Page, Locator, expect } from '@playwright/test';

export class SearchComponent {
    private page: Page;
    private searchOrJumpToButton: Locator;
    private searchInput: Locator;
    private searchButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.searchOrJumpToButton = page.locator('button[aria-label="Search or jump to…"]');
        this.searchInput = page.locator('input[name="query-builder-test"]');
        this.searchButton = page.locator('button[type="submit"]');
    }

    public async search(query: string): Promise<void> {
        await this.searchOrJumpToButton.waitFor();  // ✅ Чекаємо на кнопку для відкриття поля пошуку
        await this.searchOrJumpToButton.click();  // ✅ Клікаємо на кнопку
        await this.searchInput.waitFor();  // ✅ Чекаємо, що поле вводу з'явиться
        await expect(this.searchInput).toBeVisible();  // ✅ Чекаємо, що поле вводу видиме
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter');  // ✅ Натискаємо Enter після введення запиту
    }
}
