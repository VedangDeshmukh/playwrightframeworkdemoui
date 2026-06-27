import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import{test,expect} from "../fixtures/basrFixtures.js"


test('login to application test',
     {tag:['@sanity','@product','@regression'],
      annotation:[
        {type:'epic',description:'EPC-001 Design loginpage'},
        {type:'feature',description:'login page feature'},
        {type:'module',description:'Login Moudule'},
        {type:'Severity',description:'High'},
        {type:'Owner',description:'Vedang'}
      ]  

     },async ({ homepage }) => {

    await expect(homepage.page).toHaveTitle('My Account')

    // let actualtitle: string = await loginpage.loginToApplication("abctt@gmail.com", "Admin@123");
    // expect(actualtitle).toBe('My Account')

})

test('verify warning message on incorrect login', async ({ page,baseURL }) => {
    let loginpage: LoginPage = new LoginPage(page);
    await page.goto(baseURL!)
    await loginpage.loginToApplication("abctt@gmail111.com", "Admin@1223");
    let warningmessage: string | null = await loginpage.getInvalidLoginMessage();
    expect(warningmessage).toContain('Warning: No match for E-Mail Address and/or Password.')



})