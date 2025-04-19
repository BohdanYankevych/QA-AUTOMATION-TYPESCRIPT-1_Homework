import { test } from '@playwright/test';
import { GithubMainPage } from '../src/pages/github-main-page';
import { GithubSearchResultsPage } from '../src/pages/github-search-results-page';

test.describe('GitHub Search Tests', () => {
    test('Should perform a search and show results', async ({ page }) => {
        const mainPage = new GithubMainPage(page);
        const resultsPage = new GithubSearchResultsPage(page);

        await mainPage.goto();
        await mainPage.searchComponent.search('Playwright');
        await resultsPage.expectResultsToBeVisible();
    });
});


