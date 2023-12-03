const fs = require("fs");
const express = require('express');
const bodyParser = require("body-parser");

const app = express()
const port = 3000

app.use(bodyParser.json());//controls comes to middleware first

function calculateSum(counter){
    var sum = 0;
    for(var i=0; i<counter; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    //console.log(res);
    var counter = req.query.counter; 
    if(counter < 10000){
        var calculatedSum = calculateSum(counter);
        var answerObj = {
            sum:calculatedSum
        }
        res.send(answerObj); // send only strings

    }else{
        res.send("big num");
    }
}
function givePage(req,res){
    res.send(`<html><title>Hi</title><body><h1>hello</h1></body><html>`)
}
app.get('/handleSum', handleFirstRequest);
app.get('/page', givePage);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


