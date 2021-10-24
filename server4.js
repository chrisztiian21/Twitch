//<form method="post" action="databse.php"></form>
/*
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const mysql = require('mysql');
const { response } = require('express');
//const fetch = require('node-fetch');

// Configure MySQL connection
var connection = mysql.createConnection({
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5441530',
    password: 'MUCkJUKs9j',
    database: 'sql5441530'
  });

//Establish MySQL connection
*/



/////////////////////////////sql connection//////////////////////////////


const express = require("express");
const app = express();
const port = 5500;
//const { google } = require("googleapis");
//const request = require("request");
const cors = require('cors');
const urlParse = require("url-parse");
const queryParse = require('query-string');
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient
var database;
var router = express.Router();
var assert = require('assert');
var website = 'mongodb+srv://twitch.y07z3.mongodb.net/Twitch'

//const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chrisztiian:<password>@twitch.y07z3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect('mongodb+srv://chrisztiian:Alkaline21@twitch.y07z3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true }, { useUnifiedTopology: true });

//Establish Connection
MongoClient.connect('mongodb+srv://chrisztiian:Alkaline21@twitch.y07z3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function(err, database) {
    if (err)
        throw err
    else {
        db = database;
        console.log('You Have Successfully Connected to MongoDB');
        //Start app only after connection is ready
        app.listen(3000);
    }
});




require('dotenv').config();
const request = require ('request');

const getToken = (url,callback) => {
const options = {
    url: process.env.GET_TOKEN,
    json:true,
    body:{
        client_id: process.env.CLIENT_ID,
        client_secret:process.env.CLIENT_SECRET,
        grant_type: 'client_credentials'

    }
};
request.post(options, (err,res,body) => {
    if(err) {
        return console.log(err); 
    }
        console.log('Statis: ${res.statusCOde');
        console.log(body);
        callback(res);
    });

    };


var AT = " ";
getToken(process.env.GET_TOKEN,(res) =>{
    AT = res.body.access_token;
    return AT;
})


const getGames= (url,accessToken,callback) => {
    const gameOptions = {
        url: process.env.GET_GAMES,
        method: 'GET',
        headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': 'Bearer ' + accessToken
        }
    };
 
    request.get(gameOptions, (err,res,body) =>{
        if(err) {
            return console.log(err);
        }
        console.log('Status: ${res.statusCode}');
         console.log(JSON.parse(body));
        


        


       /*


        connection.connect(function(err) {
            if (err) throw err;
            console.log("You are connected!");
            var data = [];
           async function insert (sql,data){
            for (let i = 0; i < data.length; i ++)
            await client.insert(sql,data[i]); 
                data[i]= [];
            console.log("records inserted");
            }
        

            //var sql = "INSERT INTO mySampleTable (id,name,box_art_url) VALUES ('69','hey', 'Highwayyyy')";
            //connection.query(sql, function (err, result) {
             // if (err) throw err;
            //  console.log("1 record inserted");
           // });
          });
          


          */
    });
    
};

setTimeout(() => {
    getGames(process.env.GET_GAMES,AT,(response) =>{

    })
},1000)



///////////SQL connection/////////


