

let request = require('request');
let encode = require('nodejs-base64-encode');
let date=new Date();
let myDate=date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() + 1 ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2) 

let url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
  



const getAccessToken= (consumer_key,consumer_secret)=>{
  console.log("Getting access Token Initializing")
  const get=true
  let access_token =null;
  let auth = "Basic " + new Buffer(consumer_key + ":" + consumer_secret).toString("base64");


  return new Promise((resolve,reject)=>{
    request(
      {
        url : url,
        headers : {
          "Authorization" : auth
        }
      }
      ,
      (error, response, body)=> {
          access_token = JSON.parse(body).access_token
          console.log("Successfully got access token, returning response **** "+access_token)
          
      }
      
    )
    if(true){
    
  setTimeout(() => {
    resolve(access_token)
  
  }, 3000);    
    }
  
    else{
      reject(new Error("An error occured fetching the access token"))
    }
  
  
  })
}



const lipaNaMpesaOnline=(importantKeys,oauth_token)=>{
  let lipa_na_mpesa_passkey='bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919'
  let Password=encode.encode(importantKeys.BusinessShortCode+lipa_na_mpesa_passkey+myDate,'base64')
  let resBody =null;
  let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
  let auth = "Bearer " + oauth_token;

  return new Promise((resolve,reject)=>{
    request(
      {
        method: 'POST',
        url : url,
        headers : {
          "Authorization" : auth
        },
      json : {
        "BusinessShortCode": importantKeys.BusinessShortCode,
        "Password": Password,
        "Timestamp": myDate,
        "TransactionType": importantKeys.TransactionType,
        "Amount": importantKeys.Amount,
        "PartyA": importantKeys.PartyA,
        "PartyB": importantKeys.PartyB,
        "PhoneNumber": importantKeys.PhoneNumber,
        "CallBackURL": importantKeys.CallBackURL,
        "AccountReference": importantKeys.AccountReference,
        "TransactionDesc": importantKeys.TransactionDesc
      }
    },
     (error, response, body)=> {
        // TODO: Use the body object to extract the response
        resBody = body
        
      }
    )

    if(oauth_token !=''){
      
setTimeout(() => {
  resolve(console.log(resBody)
) 
}, 5500);     
    }

    else{
      reject(new Error("Something went wrong"))
      console.log("Something went wrong")

    }
  })
}


//lipaNaMpesaOnline(importantKeys);

const LNMPOnline=(importantKeys)=>{
  getAccessToken(importantKeys.ConsumerKey,importantKeys.ConsumerSecret).then((res)=>{
    console.log("Access token is "+res)
    accessToken =res

    lipaNaMpesaOnline(importantKeys,accessToken).then((res)=>{
console.log(res)
    }).catch((err)=>{
console.log(err)
    })

}).catch((err)=>{
    console.log(err)

})
}

//LNMPOnline(importantKeys);
module.exports={
  LNMPOnline
 
}

