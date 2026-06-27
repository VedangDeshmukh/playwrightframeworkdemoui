import { Locator, Page } from '@playwright/test'
import { ElementUtil } from '../utils/ElementUtil.js'


export class ProductInfoPage {


    private page: Page;
    private eleutil: ElementUtil;
    private readonly productmap = new Map();

    private readonly productheader: Locator;
    private readonly productimages: Locator;
    private readonly productmetadata: Locator
    private readonly prodcutpricedata: Locator

    constructor(page: Page) {
        this.page = page;
        this.eleutil = new ElementUtil(page);

        this.productheader = this.page.locator(`h1`);
        this.productimages = this.page.locator(`ul.thumbnails img`);
        this.productmetadata = this.page.locator(`(//div[@class='col-sm-4']//ul[@class='list-unstyled'])[1]/li`);
        this.prodcutpricedata = this.page.locator(`(//div[@class='col-sm-4']//ul[@class='list-unstyled'])[2]/li`);

    }


    public async getProductHeader(): Promise<string> {
        let header: string = await this.eleutil.getElementInnerText(this.productheader)
        console.log(`header of the product:`, header)
        return header;
    }

    public async getImageCount(): Promise<number> {
        await this.eleutil.waitForElementVisible(this.productimages)
        let images: Locator[] = await this.productimages.all();
        let imagescount: number = images.length;
        return imagescount;

    }

    async getProductDetails():Promise<Map<string|number,string|number>>{
        this.productmap.set('productheader',await this.getProductHeader());
        this.productmap.set('imagecount',await this.getImageCount())

        await this.getProductMetaData();
        await this.getProductPriceMetaData();

        console.log(`Full product details for product: ${await this.getProductHeader()}`);
        this.printProductDetails();
        return this.productmap;

    }

    private async printProductDetails(){
        for(const[key,value] of this.productmap){
            console.log(key,value);
        }
    }

    // Brand: Apple
    // Product Code: Product 18
    // Reward Points: 800
    // Availability: Out Of Stock

    public async getProductMetaData() {

        let productdata: string[] = await this.productmetadata.allInnerTexts();
        for (let meta of productdata) {
            let metadata: string[] = meta.split(':');
            let metakey = metadata[0];
            let metavalue = metadata[1].trim();
            this.productmap.set(metakey, metavalue);

        }

    }


    public async getProductPriceMetaData(){
           let pricedata:string[]=  await this.prodcutpricedata.allInnerTexts();
           let productprice = pricedata[0].trim();
           let productextax = pricedata[1].split(':')[1].trim()

           this.productmap.set('price',productprice);
           this.productmap.set('etaxprice',productextax)
    }



}