import{test, expect,request} from '@playwright/test'

const clinet_id= 'd792cee3d9c244ddbd98f7c3a08018ff';
const client_secret = '2bcdfc6655354b43afca2353d805273c'
let token:string;


test.beforeEach('generate a fresh token',async ({request})=>{
    const response =await request.post('https://accounts.spotify.com/api/token',{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'

            },
            form:{
                grant_type:'client_credentials',
                client_id: clinet_id,
                client_secret: client_secret
            }
        })

        const responsedata =await response.json();
        console.log("resonse of token api", responsedata)

        expect(response.status()).toBe(200);
         token =await responsedata.access_token;
         token.trim();
        console.log("generated token = ",token)
})


test('veirfy get albun',async({request})=>{
     let responseget = await  request.get('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy',{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })

           
            expect(responseget.status()).toBe(200);
             const resonsedata = await responseget.json();
            console.log("get album response:",JSON.stringify(resonsedata,null,2))
})


test('get tracks', async ({ request }) => {
    const response = await request.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
       
    });

    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));

});