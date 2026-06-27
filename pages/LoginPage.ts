import { Locator, Page,expect } from "@playwright/test";
import { ElementUtil } from "../utils/ElementUtil.js"
import{HomePage} from "../pages/HomePage.js"
import{RegistractionPage} from './RegistractionPage.js'



export class LoginPage{


    private readonly page:Page;
    private readonly elutil:ElementUtil;


    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly invalidmessage:Locator;
    private readonly registractionlink:Locator;

    constructor(page:Page){
        this.page = page;
        this.elutil = new ElementUtil(this.page)
        

        this.emailId = page.getByRole('textbox',{name:'E-Mail Address'})
        this.password= page.getByRole('textbox',{name:'Password'})
        this.loginBtn = page.locator(`input[type='submit'][value='Login']`)
        this.invalidmessage = page.locator(`.alert.alert-danger.alert-dismissible`) 
        this.registractionlink = this.page.getByRole('link', { name: 'Register' }).first();
   
    }

      public async goToReistractionPage():Promise<RegistractionPage>{
        await this.elutil.clikOnElement(this.registractionlink);
        return new RegistractionPage(this.page)
    }

    public async loginToApplication(username:string , password:string):Promise<HomePage>{
        await this.elutil.fillElementValue(this.emailId,username);
        await this.elutil.fillElementValue(this.password,password);
        await this.elutil.clikOnElement(this.loginBtn);
        // let title:string = await this.page.title();
        // console.log("title of page=",title)
        // return title;
        return new HomePage(this.page)
    }

     async getInvalidLoginMessage():Promise<string|null>{
       const msg:string|null= await this.elutil.getElementInnerText(this.invalidmessage);
       console.log('warning message=',msg)
       return msg;
    }
    
   


}