import {BrowserContext, Locator, Page} from "@playwright/test";

export class SettingsPage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly profileSettingsButton: Locator;
	readonly dataCompanyButton: Locator;
	readonly usersButton: Locator;
	readonly apiKeyButton: Locator;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
	}
}