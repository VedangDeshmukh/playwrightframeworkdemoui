import { test, expect, APIResponse } from '@playwright/test'

const token = 'd61af96a13af765dc911f5c98cd849f5ae9198253c80b67eb4f84ca73dbba410'

test('verify api get call', async ({ request }) => {

    const response: APIResponse = await request.get('https://gorest.co.in/public/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    })

    expect(response.status()).toBe(200)
    let responcedata = await response.json()
    console.log(responcedata)
})

test('verify api get specifc user call', async ({ request }) => {

    const response: APIResponse = await request.get('https://gorest.co.in/public/v2/users/8525474', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    })

    expect(response.status()).toBe(200)
    let responcedata = await response.json()
    console.log(responcedata)
})


test('verify api post user call', async ({ request }) => {

    const userdata = {
        "name": "Tenali Ramakrishna",
        "email": "tenadhdvv012c@example.com",
        "gender": "male",
        "status": "active"
    }

    const response: APIResponse = await request.post('https://gorest.co.in/public/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
        data:userdata
    })

     let responcedata = await response.json()
    console.log(responcedata)
    expect(response.status()).toBe(201)
   
})

test('verify api put user call', async ({ request }) => {

    const userdata = {
    "name": "testUpdated Name",
    "status": "inactive"

    }

    const response: APIResponse = await request.put('https://gorest.co.in/public/v2/users/8525524', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
        data:userdata
    })

     let responcedata = await response.json()
    console.log(responcedata)
    expect(response.status()).toBe(200)
   
})