
import { expect } from 'chai';
import puppeteer, { Browser, BrowserContext, Page } from 'puppeteer';

describe('puppeteer ebay test', () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    before(async () => {
        browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1200, height: 800 } });
    });

    beforeEach(async () => {
        context = await browser.createBrowserContext();
        page = await context.newPage();
        await page.goto('https://www.ebay.com/');
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    after(async () => {
        await browser.close();
    });

    it('should find ebay goods', async () => {
        const inputSelector = '#gh-ac';
        await page.waitForSelector(inputSelector);
        await page.type(inputSelector, 'laptop');
        await page.keyboard.press('Enter');

        const goodsSelector = '.s-item__title';
        await page.waitForSelector(goodsSelector); // Чекаємо, поки результати завантажаться

        const goods = await page.$$(goodsSelector);

        // Перевіряємо, чи хоча б один товар містить слово 'laptop'
        let foundLaptop = false;
        for (const good of goods) {
            const text = await good.evaluate(el => el.textContent);
            if (text && text.toLowerCase().includes('laptop')) {
                foundLaptop = true;
                break;
            }
        }

        expect(foundLaptop).to.be.true; // Перевіряємо, чи хоча б один товар є ноутбуком
    });

    it('should ensure that products have prices', async () => {
        const inputSelector = '#gh-ac';
        await page.waitForSelector(inputSelector);
        await page.type(inputSelector, 'laptop');
        await page.keyboard.press('Enter');

        const priceSelector = '.s-item__price';
        await page.waitForSelector(priceSelector);

        const prices = await page.$$(priceSelector);
        expect(prices.length).to.be.greaterThan(0);

        for (const price of prices) {
            const priceText = await price.evaluate(el => el.textContent?.trim());
            expect(priceText).to.match(/\$\d+/); // Перевіряємо, що ціна містить знак долара та число
        }
    });

});
