import { Locator, Page, expect } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil.js"
import { HomePage } from "../pages/HomePage.js"
import { time } from "console";


export class RegistractionPage {


    private readonly page: Page;
    private readonly elutil: ElementUtil;

    private firstname: Locator;
    private lastname: Locator;
    private emial: Locator;
    private phone: Locator;
    private password: Locator;
    private confirmpassword: Locator;
    private aggreed: Locator;
    private cntbtn: Locator;
    private registractionmsg: Locator;
    private continuebtn: Locator;
    private loginbtn: Locator;




    constructor(page: Page) {
        this.page = page;
        this.elutil = new ElementUtil(this.page)

        this.firstname = page.getByRole('textbox', { name: 'First Name' });
        this.lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.emial = page.getByRole('textbox', { name: 'E-Mail' });
        this.phone = page.getByRole('textbox', { name: 'Telephone' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.confirmpassword = page.getByRole('textbox', { name: 'Password Confirm' });
        this.aggreed = page.locator('[name="agree"]');
        this.cntbtn = page.getByRole('button', { name: 'Continue' });

        this.registractionmsg = page.getByRole('heading', { name: 'Your Account Has Been Created!', level: 1 });
        this.continuebtn = page.getByRole('link', { name: 'Continue' });
        this.loginbtn = page.getByRole('link', { name: 'Logout' });

    }

    public async registerUser(
        firstname: string,
        lastname: string,
        phone: string,
        password: string,
        confirmpassword: string,
        subscribe: string,
    ): Promise<string> {
        await this.elutil.fillElementValue(this.firstname, firstname);
        await this.elutil.fillElementValue(this.lastname, lastname);
        await this.elutil.fillElementValue(this.emial, await this.generateemail());
        await this.elutil.fillElementValue(this.phone, phone);
        await this.elutil.fillElementValue(this.password, password);
        await this.elutil.fillElementValue(this.confirmpassword, confirmpassword);

        if (subscribe.toLocaleLowerCase() !== 'yes') {
            await this.page.getByRole('radio', { name: 'Yes', checked: false }).click();
        }
        await this.elutil.clikOnElement(this.aggreed);
        await this.elutil.clikOnElement(this.cntbtn);

        let msg: string = await this.elutil.getElementInnerText(this.registractionmsg);
        await this.elutil.clikOnElement(this.continuebtn);
        await this.elutil.clikOnElement(this.loginbtn);
        return msg;

    }


    async generateemail(): Promise<string> {

        return 'auto' + Date.now() + '@gmail.com'

    }




}