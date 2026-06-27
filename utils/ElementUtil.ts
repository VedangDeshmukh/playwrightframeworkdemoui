import { Locator, Page } from '@playwright/test'


export class ElementUtil {


    private page: Page;
    private defaulttimeout: number;

    constructor(page: Page, defaulttimeout: number = 3000) {
        this.page = page;
        this.defaulttimeout = defaulttimeout;
    }

    private getLocator(locator: Locator | string, index?: number): Locator {

        if (typeof (locator) === 'string') {
            if (index) {
                return this.page.locator(locator).nth(index)
            } else {
                return this.page.locator(locator).first();
            }

        } else {
            if (index) {
                return locator.nth(index);
            } else {
                return locator.first();
            }

        }
    }

    // ==================== Click Utitlity ====================================================

    public async clikOnElement(locator: Locator, index?: number, options?: { force?: boolean, timeout?: number }): Promise<void> {

        await this.getLocator(locator, index).click(
            {
                timeout: options?.timeout,
                force: options?.force

            }
        )
    }

    public async clickonElementRight(locator: Locator, index: number, timeout?: number): Promise<void> {
        await this.getLocator(locator, index).click({ button: 'right', timeout: timeout })
    }

    // public async clickBybutton(localtor:Locator,index?:number,button?:"right"|'middle'|'left'):Promise<void>{
    //     await this.getLocator(localtor,index).click({button:button})
    // }

    // public async clickByOptions(locator:Locator,index?:number,optios?:{button?:"right"|'middle'|'left',timeout?:number,force?:boolean}){
    //     await this.getLocator(locator,index).click({
    //         button:optios?.button,
    //         timeout:optios?.timeout,
    //         force:optios?.force

    //     })
    // }

    public async doubleClickonElement(localtor: Locator, index?: number, timeout?: number): Promise<void> {
        await this.getLocator(localtor, index).dblclick({ timeout: timeout })
    }

    public async doubleClickByCount(localtor: Locator, count: number, index?: number,): Promise<void> {
        await this.getLocator(localtor, index).click({ clickCount: count })
    }

    //======================= Fill Utility =================================================================

    public async fillElementValue(locator: Locator|string, value: string, index?: number, timeout?: number): Promise<void> {
        await this.getLocator(locator,index).fill(value, { timeout: timeout })
    }

    public async fillElementValueSequentely(locator: Locator, value: string,delay: number, index?: number ): Promise<void> {
        await this.getLocator(locator,index).pressSequentially(value, { delay: delay })
    }

    public async clearElementText(locator: Locator, index?: number): Promise<void> {
        await this.getLocator(locator,index).clear();
    }


    //============================  Get Text Utility ===============================================

    public async getElementInnerText(localtor: Locator, index?: number): Promise<string> {
        let text: string = await this.getLocator(localtor, index).innerText();
        return text.trim();
    }


    public async getElementContentText(localtor: Locator, index?: number): Promise<string | null> {
        let text: string | null = await this.getLocator(localtor, index).textContent();
        return text;
    }

    public async getElementsText(localtor: Locator, index?: number): Promise<string[]> {
        return await this.getLocator(localtor, index).allInnerTexts();
    }

    //============================= Attribute Utility =========================================

    async getElementAttributeValue(locator: Locator, attribute: string, index: number): Promise<string | null> {
        const value = await this.getLocator(locator, index).getAttribute(attribute, { timeout: this.defaulttimeout })
        return value;
    }


    async getElementInputValue(locator: Locator, index: number): Promise<string> {
        const value = await this.getLocator(locator).inputValue({ timeout: this.defaulttimeout })
        return value;
    }


    //==================== check Element State =========================================

    async checkisElementisVisible(locator: Locator | string, defaultTimeOut?: number, index?: number): Promise<boolean> {
        return await this.getLocator(locator, index).isVisible({ timeout: defaultTimeOut });
    }

    async checkisElementisDisabeled(locator: Locator | string, index?: number, defaultTimeOut?: number): Promise<boolean> {
        return await this.getLocator(locator, index).isDisabled({ timeout: defaultTimeOut });
    }


    async checkisElementisHideen(locator: Locator | string, index?: number, defaultTimeOut?: number): Promise<boolean> {
        return await this.getLocator(locator, index).isHidden({ timeout: defaultTimeOut });
    }

    async checkisElementisEdatable(locator: Locator | string, index?: number, defaultTimeOut?: number): Promise<boolean> {
        return await this.getLocator(locator, index).isEditable({ timeout: defaultTimeOut });
    }

    //========== Wait for ===============================================

    async waitForElementVisible(locator: Locator | string, index?: number, timeout: number = 5000): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'visible', timeout: timeout })
            return true;
        } catch {
            return false;
        }
    }


    async waitForPageLoad(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
        await this.page.waitForLoadState(state);
        console.log(`waitd for page load state: ${state}`);
    }


    /**
     * wait for a specific timeout (static)
     */
    async sleep(timeout: number): Promise<void> {
        await this.page.waitForTimeout(timeout);
        console.log(`waited for ${timeout} ms`);
    }


    //********************Drop Down Utils/Select Based Drop Downs ****************/
    async selectByText(locator: Locator | string, text: string) {
        await this.getLocator(locator).selectOption({ label: text }, { timeout: this.defaulttimeout });
        console.log(`selected option ${text} from drop down ${locator}`);
    }

    async selectByValue(locator: Locator | string, value: string) {
        await this.getLocator(locator).selectOption({ value: value }, { timeout: this.defaulttimeout });
        console.log(`selected option ${value} from drop down ${locator}`);
    }

    async selectByIndex(locator: Locator | string, index: number) {
        await this.getLocator(locator).selectOption({ index: index }, { timeout: this.defaulttimeout });
        console.log(`selected option ${index} from drop down ${locator}`);

    }





}