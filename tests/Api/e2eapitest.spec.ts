import { test, expect, APIResponse } from '@playwright/test'


const token = 'd61af96a13af765dc911f5c98cd849f5ae9198253c80b67eb4f84ca73dbba410'
const baseurl = 'https://gorest.co.in'

test('testing e2e api calls of gorest api', async ({ request }) => {
console.log(`============== htting a post request ==================`)
    const requestdata = {
        "name": "Tenali Ramakrishna",
        "email": `hdhdhdvf222@gmail.com`,
        "gender": "male",
        "status": "active"
    }

  const response:APIResponse= await request.post(`${baseurl}/public/v2/users`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
        data:requestdata

    })

    const postresponcedata = await response.json();
    expect(response.status()).toBe(201);
    console.log(`============== post request response ==================`)
    console.log(postresponcedata)

    const id = postresponcedata.id;

console.log(`============== htting a get request ==================`)

   const getresponse = await request.get(`${baseurl}/public/v2/users/${id}`,{
            headers:{
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            }
        })

        const getresponsedata = await getresponse.json();
        expect(response.status()).toBe(201);

    console.log(`============== get request response ==================`)
        console.log(getresponsedata)

   




})
