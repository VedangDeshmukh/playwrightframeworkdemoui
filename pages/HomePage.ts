import{Locator,Page} from '@playwright/test'
import{ElementUtil} from '../utils/ElementUtil.js'
import{ResultPage} from './ResultPage.js'
import { LoginPage } from './LoginPage.js';


export class HomePage{


     page:Page;
    private eleutil:ElementUtil;

    private readonly logoutlink:Locator ;
    private readonly searchbox:string;
    private readonly searchicon:Locator;
    private readonly loginbtn:Locator;
    

    constructor(page:Page){
        this.page= page;
        this.eleutil = new ElementUtil(page)

        this.logoutlink = this.page.getByText('Logout')
        this.searchbox = `input[name='search']`;
        this.searchicon = this.page.locator('div#search button')
        this.loginbtn = this.page.getByText(`Login`)

    }


  

    public async checkLogoutLinkVisisble():Promise<boolean>{
         return  await this.eleutil.checkisElementisVisible(this.logoutlink,2)
    }

    public async searchProduct(productname:string):Promise<ResultPage>{
        console.log(`performing a product search with product:${productname}`)
        await this.eleutil.fillElementValue(this.searchbox,productname);
        await this.eleutil.clikOnElement(this.searchicon)
        return new ResultPage(this.page)
    }

     async logout():Promise<LoginPage>{
            await this.eleutil.clikOnElement(this.logoutlink);
            await this.eleutil.clikOnElement(this.loginbtn,4);
            return new LoginPage(this.page);

    }
}