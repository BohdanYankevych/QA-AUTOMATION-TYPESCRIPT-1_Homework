import { test, expect } from '@playwright/test';
import { EbayMainPage } from '../pages/ebay-main-page';

test.describe('Ebay Main Page Tests', () => {
    test('Should search for a product and verify results', async ({ page }) => {
        const mainPage = new EbayMainPage(page);
        await mainPage.goto();
        const searchResultsPage = await mainPage.searchForItem('iPhone 15');

        // Використовуємо метод getResultItems() замість прямого доступу до resultItems
        await expect(searchResultsPage.getResultItems().first()).toBeVisible();

        const firstProductTitle = await searchResultsPage.getFirstProductTitle();
        expect(firstProductTitle).toMatch(/iPhone/i);
    });
});
