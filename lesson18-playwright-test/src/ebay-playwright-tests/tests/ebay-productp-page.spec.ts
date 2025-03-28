import { test, expect } from '@playwright/test';
import { EbayMainPage } from '../pages/ebay-main-page';
import { EbayProductPage } from '../pages/ebay-product-page';

test.describe('Ebay Product Page Tests', () => {
    test('Should open a product and check title', async ({ page }) => {
        const mainPage = new EbayMainPage(page);
        await mainPage.goto();
        await mainPage.searchForItem('iPhone 15');

        // Клікаємо на перший товар у списку
        await page.locator('.s-item__link').first().click();

        const productPage = new EbayProductPage(page);
        const title = await productPage.getProductTitle();
        expect(title).toContain('iPhone');
    });
});
