//This is an example template
//Uncomment out the Last line of this code to test how it works

let Constants = require('./constants')

//These are the Key parameters sent to the function
let importantKeys=
    {
        ConsumerKey:'I7qtM5EaaF50VJr4Rn3BJQ7vHAwnsdpx', // Refer to MPESA API Documentation
        ConsumerSecret:'UWfpwANAfGMMHL2v', // Refer to mpesa API Documentation
        BusinessShortCode: 174379, //The Paybill where money is being sent to
        TransactionType: "CustomerPayBillOnline", //the type of the transaction
        Amount: 2000,
        PartyA: 254791836987, //The Phone Number that Initializes the transaction
        PartyB: 174379, //The Paybill where money is being sent to
        PhoneNumber: 254791836987, // Same to Part A
        CallBackURL: "https://134.209.148.107/lnmp", // The CallBack  Url where Requests will be made to
        AccountReference: "WIFI Money", // The Purpose of the Money
        TransactionDesc: " Wi Fi money"

    }



//Here you trigger the function imported 

//Constants.LNMPOnline(importantKeys)



