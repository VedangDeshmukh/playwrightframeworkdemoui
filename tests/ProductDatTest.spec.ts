
import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { ResultPage } from "../pages/ResultPage.js";
import { ProductInfoPage } from "../pages/ProductInfoPage.js";
import{test, expect} from '../fixtures/basrFixtures.js'


test(`verify the product data`, async ({ homepage }) => {

    let resultPage: ResultPage = await homepage.searchProduct('macbook');
    let productinfoPage: ProductInfoPage = await resultPage.selectProduct('MacBook Pro');

    let productheader: string = await productinfoPage.getProductHeader();
    expect(productheader).toEqual('MacBook Pro')

})


test(`verify the product images`, async ({ homepage }) => {

    let resultPage: ResultPage = await homepage.searchProduct('macbook');
    let productinfoPage: ProductInfoPage = await resultPage.selectProduct('MacBook Pro');

    let productimages: number = await productinfoPage.getImageCount();
    expect(productimages).toEqual(4)

})

test('verify product metadata', async ({ homepage }) => {
    
    let resultPage: ResultPage = await homepage.searchProduct('macbook');
    let productinfoPage: ProductInfoPage = await resultPage.selectProduct('MacBook Pro');
    const actualProductFullDetails = await productinfoPage.getProductDetails();
         
        expect.soft(actualProductFullDetails.get('productheader')).toBe('MacBook Pro');
        expect.soft(actualProductFullDetails.get('Brand')).toBe('Apple');
        expect.soft(actualProductFullDetails.get('Product Code')).toBe('Product 18');
        expect.soft(actualProductFullDetails.get('Reward Points')).toBe('800');
        expect.soft(actualProductFullDetails.get('Availability')).toBe('Out Of Stock');
})

    test('verify product Pricing ', async ({ homepage }) => {
        let resultPage: ResultPage = await homepage.searchProduct('macbook');
        let productinfoPage: ProductInfoPage = await resultPage.selectProduct('MacBook Pro');
        const actualProductFullDetails = await productinfoPage.getProductDetails();
     
        expect.soft(actualProductFullDetails.get('productheader')).toBe('MacBook Pro');
        expect.soft(actualProductFullDetails.get('price')).toBe('$2,000.00');
        expect.soft(actualProductFullDetails.get('etaxprice')).toBe('$2,000.00');

    });


