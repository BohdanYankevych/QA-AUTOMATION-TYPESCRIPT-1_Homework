import eBayPage from '../../project-directory/pageobjects/eBayPage';

describe('eBay Price Check Test', () => {
    beforeEach(async () => {
        await eBayPage.open();
    });

    it('should ensure that products have prices', async () => {
        await eBayPage.searchForProduct('laptop');
        const pricesAvailable = await eBayPage.checkPrices();
        expect(pricesAvailable).toBe(true);
    });
});
