let Constants = require('./constants')

let ConsumerKey='I7qtM5EaaF50VJr4Rn3BJQ7vHAwnsdpx'
let ConsumerSecret='UWfpwANAfGMMHL2v' 

Constants.getAccessToken(ConsumerKey,ConsumerSecret).then((res)=>{
    console.log("Access token is "+res)
    accessToken =res

    Constants.lipaNaMpesaOnline(ConsumerKey,ConsumerSecret,accessToken).then((res)=>{
console.log(res)
    }).catch((err)=>{
console.log(err)
    })

}).catch((err)=>{
    console.log(err)

})
