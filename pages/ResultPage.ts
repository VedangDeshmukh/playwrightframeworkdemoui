import{Locator,Page} from '@playwright/test'
import{ElementUtil} from '../utils/ElementUtil.js'
import{ProductInfoPage} from '../pages/ProductInfoPage.js'


export class ResultPage{


    private page:Page;
    private eleutil:ElementUtil;


    private readonly productscounts:Locator ;

    constructor(page:Page){
        this.page= page;
        this.eleutil = new ElementUtil(page)


        this.productscounts = this.page.locator(`.product-thumb`)

    }

    public async getProductCount():Promise<number>{
        return  await this.productscounts.count();
    }


    public async selectProduct(name:string):Promise<ProductInfoPage>{
        console.log(`====== selecting a product:${name} =====` )

        await this.page.getByRole('link',{name:`${name}`,exact:true}).first().click();
        return new ProductInfoPage(this.page)
    }



}