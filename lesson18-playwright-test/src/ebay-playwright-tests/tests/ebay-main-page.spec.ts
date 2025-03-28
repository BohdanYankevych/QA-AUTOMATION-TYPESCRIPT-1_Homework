import { test, expect } from '@playwright/test';
import { EbayMainPage } from '../pages/ebay-main-page';

test.describe('Ebay Main Page Tests', () => {
    test('Should search for a product', async ({ page }) => {
        const mainPage = new EbayMainPage(page);
        await mainPage.goto();
        await mainPage.searchForItem('iPhone 15');

        await expect(page).toHaveURL(/sch\/i.html/);
    });
});
