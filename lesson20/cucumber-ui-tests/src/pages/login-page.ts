import { Page, BrowserContext } from 'playwright';

export class LoginPage {
  private page: Page;

  constructor() {
    this.page = browser.newPage();
  }

  async open(): Promise<void> {
    await this.page.goto('https://example.com/login');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async isUserLoggedIn(): Promise<boolean> {
    const userProfile = await this.page.$('.user-profile');
    return userProfile !== null;
  }
}