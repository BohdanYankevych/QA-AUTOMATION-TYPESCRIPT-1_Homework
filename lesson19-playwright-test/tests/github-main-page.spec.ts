import { test } from '@playwright/test';
import { GithubMainPage } from '../src/pages/github-main-page';

test.describe('GitHub Main Page Tests', () => {
    test('Visit main page', async ({ page }) => {
        const mainPage = new GithubMainPage(page);
        await mainPage.goto();

        mainPage.headerComponent.findHeader();
    });

    test('Search for playwrite', async ({ page }) => {
        const mainPage = new GithubMainPage(page);
        await mainPage.goto();

        await mainPage.headerComponent.findHeader();
        await mainPage.searchComponent.search('Playwright');
    });
});
