import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, chromium } from 'playwright';

class CustomWorld {
  public browser: Browser;
  public context: any;
  public page: any;

  constructor() {
    this.browser = chromium.launch();
    this.context = this.browser.newContext();
    this.page = this.context.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);