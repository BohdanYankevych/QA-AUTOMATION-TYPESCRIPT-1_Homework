import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';

class CustomWorld {
    public browser: Browser;
    public context: any;
    public page: any;

    public constructor() {
        this.browser = chromium.launch();
        this.context = this.browser.newContext();
        this.page = this.context.newPage();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    public async closeBrowser() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
