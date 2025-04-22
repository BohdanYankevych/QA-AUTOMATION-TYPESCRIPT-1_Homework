// const { test, expect } = require('@playwright/test');

// test('renders home page', async ({ page }) => {
//   await page.goto('http://localhost:3000');
//   const link = await page.locator('text=learn react');
//   await expect(link).toBeVisible();
// });

const { test, expect } = require('@playwright/test');

test('should render the app', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Expense Tracker/);
});