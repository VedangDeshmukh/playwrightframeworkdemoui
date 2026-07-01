
import { test, expect } from '@playwright/test'

test('handeling a basic auth', async ({ request }) => {

    const username = 'admin';
    const password = 'admin';
    const credientils = Buffer.from(`${username}:${password}`).toString('base64')


    const response = await request.get('https://the-internet.herokuapp.com/basic_auth', {
        headers: {
            'Authorization': `Basic ${credientils}`
        }
    });
    expect(response.status()).toBe(200);
    const body = await response.text();
    console.log(body);
})


test('handeling a basic auth other approch', async ({ request }) => {

    //store the credientils playwright congig.ts in use section
    //  httpCredentials:{
    //   username:'admin',
    //   password:'admin'
    // }
    const response = await request.get('https://the-internet.herokuapp.com/basic_auth');
    expect(response.status()).toBe(200);
    const body = await response.text();
    console.log(body);
})
