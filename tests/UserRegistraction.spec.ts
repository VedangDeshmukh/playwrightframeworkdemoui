import { test, expect } from '@playwright/test'
import { HomePage } from "../pages/HomePage.js";
import { ResultPage } from "../pages/ResultPage.js";
import { LoginPage } from '../pages/LoginPage.js';
import { RegistractionPage } from '../pages/RegistractionPage.js';
import fs from 'fs'
import { parse } from 'csv-parse/sync';


type registerdatatype = {

    firstname: string,
    lastname: string,
    phone: string,
    password: string,
    confirmpassword: string,
    subscribe: string

}

let registractionfile = fs.readFileSync('./data/registractionuser.csv', 'utf-8')

let registractiondata:registerdatatype[] = parse(registractionfile,{
     columns:true,
    skip_empty_lines:true
})


for(let data of registractiondata){
    test(`verify the registarction of user of ${data.firstname} `, async ({ page, baseURL },) => {

    let loginpage: LoginPage = new LoginPage(page);
    await page.goto(baseURL!)
    let registractionpage: RegistractionPage = await loginpage.goToReistractionPage();
    let msg: string = await registractionpage.registerUser(
        data.firstname, data.lastname, data.phone, data.password, data.password,data.subscribe
    )

    expect(msg).toBe('Your Account Has Been Created!');
})
}




