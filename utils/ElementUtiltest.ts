// import { Locator, Page, expect } from '@playwright/test'



// export class Elementutil {

//     private page: Page;
//     private defaultTimeOut: number;

//     constructor(page: Page, defaultTimeOut: number = 3000) {
//         this.page = page
//         this.defaultTimeOut = defaultTimeOut
//     }


//     /**
//      * method to convert the string to locator and if locator then retrun a locator
//      * @param locator 
//      * @returns 
//      */
//     public getElement(locator: Locator | string, index?: number): Locator {
//         if (typeof (locator) === 'string') {
//             if (index) {
//                 return this.page.locator(locator).nth(index);
//             } else {
//                 return this.page.locator(locator).first();
//             }
//         } else {
//             if (index) {
//                 return locator.nth(index)
//             } else {
//                 return locator.first();
//             }
//         }

//     }

//     public async enter_value(locator: Locator | string, value: string, defaultTimeOut?: number): Promise<void> {
//         await this.getElement(locator).fill(value, { timeout: defaultTimeOut })
//     }

//     public async enter_valueSequentelly(locator: Locator | string, value: string, defaultTimeOut?: number, delay: number = 500): Promise<void> {
//         await this.getElement(locator).pressSequentially(value, { timeout: defaultTimeOut, delay })
//     }

//     public async clikOnElement(locator: Locator | string, defaultTimeOut?: number): Promise<void> {
//         await this.getElement(locator).click({ timeout: defaultTimeOut })
//     }

//     public async dblClickOnElement(locator: Locator | string, defaultTimeOut: number): Promise<void> {
//         await this.getElement(locator).dblclick({ timeout: defaultTimeOut })
//     }


//     public async righClickOnElement(locator: Locator | string, defaultTimeOut: number): Promise<void> {
//         await this.getElement(locator).click({
//             button: 'right',
//             timeout: defaultTimeOut
//         })
//     }

//     async clear(locator: string | Locator): Promise<void> {
//         await this.getElement(locator).clear({ timeout: this.defaultTimeOut });
//     }


//     async getElementInnerText(locator: Locator): Promise<string> {
//         const text: string = await this.getElement(locator).innerText({ timeout: this.defaultTimeOut });
//         return text.trim();
//     }

//     async getElementText(locator: Locator): Promise<string | null> {
//         const text: string | null = await this.getElement(locator).textContent({ timeout: this.defaultTimeOut });
//         return text;
//     }


//     async getElementAttributeValue(locator: Locator, attribute: string): Promise<string | null> {
//         const value = await this.getElement(locator).getAttribute(attribute, { timeout: this.defaultTimeOut })
//         return value;
//     }

//     async getElementInputValue(locator: Locator): Promise<string> {
//         const value = await this.getElement(locator).inputValue({ timeout: this.defaultTimeOut })
//         return value;
//     }

//     async getAllInnerTextsofElements(locator: Locator | string): Promise<string[]> {
//         return await this.getElement(locator).allInnerTexts();
//     }

//     //================================= Element Visibility and State Check =========================




//     async checkisElementisVisible(locator: Locator | string, defaultTimeOut: number): Promise<boolean> {
//         return await this.getElement(locator).isVisible({ timeout: defaultTimeOut });
//     }

//     async checkisElementisDisabeled(locator: Locator | string, defaultTimeOut: number): Promise<boolean> {
//         return await this.getElement(locator).isDisabled({ timeout: defaultTimeOut });
//     }


//     async checkisElementisHideen(locator: Locator | string, defaultTimeOut: number): Promise<boolean> {
//         return await this.getElement(locator).isHidden({ timeout: defaultTimeOut });
//     }

//     async checkisElementisEdatable(locator: Locator | string, defaultTimeOut: number): Promise<boolean> {
//         return await this.getElement(locator).isEditable({ timeout: defaultTimeOut });
//     }


//     //========== Wait for ===============================================

//     async waitForElementVisible(locator: Locator | string, timeout: number = 5000): Promise<boolean> {
//         try {
//             await this.getElement(locator).waitFor({ state: 'visible', timeout: timeout })
//             return true;
//         } catch {
//             return false;
//         }
//     }


//     async waitForPageLoad(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
//         await this.page.waitForLoadState(state);
//         console.log(`waitd for page load state: ${state}`);
//     }


//     /**
//      * wait for a specific timeout (static)
//      */
//     async sleep(timeout: number): Promise<void> {
//         this.page.waitForTimeout(timeout);
//         console.log(`waited for ${timeout} ms`);
//     }


//     //********************Drop Down Utils/Select Based Drop Downs ****************/
//     async selectByText(locator: Locator | string, text: string) {
//         await this.getElement(locator).selectOption({ label: text }, { timeout: this.defaultTimeOut });
//         console.log(`selected option ${text} from drop down ${locator}`);
//     }

//     async selectByValue(locator: Locator | string, value: string) {
//         await this.getElement(locator).selectOption({ value: value }, { timeout: this.defaultTimeOut });
//         console.log(`selected option ${value} from drop down ${locator}`);
//     }

//     async selectByIndex(locator: Locator | string, index: number) {
//         await this.getElement(locator).selectOption({ index: index }, { timeout: this.defaultTimeOut });
//         console.log(`selected option ${index} from drop down ${locator}`);

//     }











//     //********* Browser Utils */



// }

