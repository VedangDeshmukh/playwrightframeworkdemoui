import { test as base, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js'




type Myfexture = {
    homepage: HomePage;
}


export const  test=base.extend<Myfexture>({
    homepage: async ({ page, baseURL }, use, testInfo) => {

        const loginPage = new LoginPage(page);
        await page.goto(baseURL!);

        let appUsername = testInfo.project.metadata.appUsername;
        let appPassword = testInfo.project.metadata.appPassword;
        const homepage = await loginPage.loginToApplication(appUsername, appPassword)
        expect(homepage.checkLogoutLinkVisisble).toBeTruthy();

        await use(homepage)
    }
})

export {expect};


