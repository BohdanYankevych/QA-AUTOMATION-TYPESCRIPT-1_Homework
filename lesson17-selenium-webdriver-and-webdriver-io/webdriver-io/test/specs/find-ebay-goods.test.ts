import eBayPage from '../../project-directory/pageobjects/eBayPage';

describe('eBay Search Test', () => {
    beforeEach(async () => {
        await eBayPage.open();
    });

    it('should find ebay goods', async () => {
        await eBayPage.searchForProduct('laptop');
        const foundLaptop = await eBayPage.checkGoodsForLaptop();
        expect(foundLaptop).toBe(true);
    });
});
