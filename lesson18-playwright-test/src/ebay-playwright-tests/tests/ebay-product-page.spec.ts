import { test, expect } from '@playwright/test';
import { EbayMainPage } from '../pages/ebay-main-page';

test.describe('Ebay Product Page Tests', () => {
    test('Should open a product and check title', async ({ page }) => {
        const mainPage = new EbayMainPage(page);
        await mainPage.goto();
        const searchResultsPage = await mainPage.searchForItem('iPhone 15');

        // Відкриваємо перший товар
        const productPage = await searchResultsPage.openFirstProduct();

        const title = await productPage.getProductTitle();
        expect(title).toContain('iPhone');
    });
});
