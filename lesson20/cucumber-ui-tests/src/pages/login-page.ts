import { Browser, Page } from 'playwright';

export class LoginPage {
    private page: Page;

    public constructor(browser: Browser) {
        this.page = await browser.newPage();
    }

    public async open(): Promise<void> {
        await this.page.goto('https://example.com/login');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.page.fill('input[name="username"]', username);
        await this.page.fill('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    public async isUserLoggedIn(): Promise<boolean> {
        const userProfile = await this.page.$('.user-profile');
        return userProfile !== null;
    }
}
