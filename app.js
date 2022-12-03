const express = require('express');
const bodyParser=require('body-parser');
const request = require('request');
const https = require('https');


const app =express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    
    res.sendFile(__dirname + "/signup.html")
})





app.post("/",function(req,res){
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const eMail = req.body.eMail;


    // var data  = {
    //     members:[
    //         {
    //             email_address : eMail,
    //             status : "subscribed",
    //             merge_fields :{
    //                 FNAME :firstName,
    //                 LNAME :lastName
    //             }
    //         }
    //     ]
    // };

    // const jsonData = JSON.stringify(data);
    // const url = "https://us6.mailchimp.com/account/api/68b0613aa1b1ffa4b8848c7763137792-us17"


    // https.request(url,options,function(response){
        
    // })


    // res.write("First Name = " + firstName );
    // res.write("  Last Name = " + lastName);
    // res.write("  Email = " + eMail);
    // res.send();
    res.sendFile(__dirname+"/success.html");
})

app.listen(3000,function(){
    console.log("server started");
})


//API KEY
//

// audience ID
// bee96978ca