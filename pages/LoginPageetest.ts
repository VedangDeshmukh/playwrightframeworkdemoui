// import { Locator, Page } from "@playwright/test";
// import { Elementutil } from "../utils/ElementUtiltest.js";
// export class LoginPage{

//     private readonly page:Page;
//     private readonly elementutil:Elementutil;
    

//     private readonly emailId:Locator;
//     private readonly password:Locator;
//     private readonly loginBtn:Locator;
//     private readonly invalidmessage:Locator;

//     constructor(page:Page){
//         this.page=page;
//         this.elementutil = new Elementutil(this.page)

//         this.emailId = page.getByRole('textbox',{name:'E-Mail Address'})
//         this.password= page.getByRole('textbox',{name:'Password'})
//         this.loginBtn = page.locator(`input[type='submit'][value='Login']`)
//         this.invalidmessage = page.locator(`.alert.alert-danger.alert-dismissible`)
//     }

//     public async logintoapplication(username:string,password:string):Promise<string>{
//         //await this.emailId.fill(username);
//        await this.elementutil.enter_value(this.emailId,username)
//        await this.elementutil.enter_value(this.password,password);
//        await this.elementutil.clikOnElement(this.loginBtn);
//         let title:string = await this.page.title();
//         console.log('title of page=',title)
//         return title;
//     }   

//     async getInvalidLoginMessage():Promise<string|null>{
//        const msg:string|null= await this.elementutil.getElementText(this.invalidmessage);
//        console.log('warning message=',msg)
//        return msg;
//     }

// }