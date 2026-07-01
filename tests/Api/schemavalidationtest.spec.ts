import { test, expect, APIResponse } from '@playwright/test'
import Ajv from 'ajv'
import fs from 'fs'

const token = 'd61af96a13af765dc911f5c98cd849f5ae9198253c80b67eb4f84ca73dbba410';
const baseurl = 'https://gorest.co.in';

const ajv = new Ajv();
const getuserschemadata = JSON.parse(fs.readFileSync('./schema/gorestgetuserschema.json', 'utf-8'))

test('verify the schema of api', async ({ request }) => {


    const getresponse = await request.get(`${baseurl}/public/v2/users/123333`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        }
    })

    const resonsedata = await getresponse.json();
    expect(getresponse.status()).toBe(200);

    //validating a json schema
    const validate = ajv.compile(getuserschemadata)
    const isValid = validate(resonsedata);

    if (!isValid) {
        console.log('schema errors: ', validate.errors);
    }

    expect(isValid).toBe(true);
    console.log('API response schema is validated -- PASS');


})


