import{test, expect} from '../fixtures/basrFixtures.js'
import { HomePage } from "../pages/HomePage.js";
import { ResultPage } from "../pages/ResultPage.js";


let searchdata = [
    { name: 'macbook', searcount: 3 },
    { name: 'samsung', searcount: 2 },
    { name: 'iphone', searcount: 1 },
    { name: 'vvv', searcount: 0 }


]


for (let data of searchdata) {
    test(`check product search feature with product: ${data.name}`, async ({homepage}) => {


    let resultPage: ResultPage = await homepage.searchProduct(data.name)
    let productcount: number = await resultPage.getProductCount();
    expect(productcount).toBe(data.searcount)

})
}



