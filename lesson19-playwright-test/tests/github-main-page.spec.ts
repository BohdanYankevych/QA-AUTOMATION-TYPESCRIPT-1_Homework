import { test } from '@playwright/test';
import { GithubMainPage } from '../src/pages/github-main-page';

test.describe('GitHub Main Page Tests', () => {
    test('Visit main page and verify header', async ({ page }) => {
        const mainPage = new GithubMainPage(page);
        await mainPage.goto();
        await mainPage.headerComponent.expectToBeVisible();
    });

    test('Search for playwright from main page', async ({ page }) => {
        const mainPage = new GithubMainPage(page);
        await mainPage.goto();
        await mainPage.searchComponent.search('Playwright');
    });
});


