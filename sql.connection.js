var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection ({
    //properties
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5441530',
    password: 'MUCkJUKs9j',
    database: 'sql5441530'
});
/*
connection.connect(function(error){
    if(!!error){
        console.log ('Error');

    }
    else {
        console.log('You Are Connected')
 
    }
});
*/
/*
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO mySampleTable (id, name, box_art_url) VALUES ('498566', 'Fall Guys: Ultimate Knockout', 'https://static-cdn.jtvnw.net/ttv-boxart/./Fall%20Guys:%20Ultimate%20Knockout-{width}x{height}.jpg')" ;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Successful Query xD");
    });
  });

*/
var php = require("./main");
// var php = require("phpcgijs"); 
var path = require("path");

var app = express();
var p = path.join("C:\Users\chris\ytnode\databse/php");

// Following is the structure for providing the declaration of paths and options:

// app.use("/", php.cgi(
//             "/path/to/phpscript.php", 
//             {
//                 "options": {"-c": "/to/php/ini/path/php.ini"}
//             }
//         ));

// Following works without a local PHP-CGI path and tries to 
//          use PHP-CGI installed in system by default:

// app.use("/", php.cgi("/path/to/phpscript")); 

// Following uses a path in second argument defining the local copy of 
//          PHP-CGI that you want to use for the application

// app.use("/", php.cgi(
//             "/path/to/phpscript.php", 
//             {
//                 "cgi_path":"to/php/cgi/path/php-cgi",
//                 "options": {"-c": "/to/php/ini/path/php.ini"}
//             }
//         ));

// options are PHP-CGI command line options and can be found in documentation
// It can also be found in readme-php-options.txt (check for update in docs)
// options ignore -h and --help

app.use("/", php.cgi(p, { cgi_path: '/usr/bin/', options: { "-c": "/etc/php.ini" } }));
app.listen(9090, '127.0.0.1');

/*
console.log("Server listening at 9090!");
  connection.connect(function(err,res) {
    if (err) throw err;
    console.log("Connected!");

    obj = res;

    for (var i=0; i <obj.length; i++){
       const id_ = obj[i].id;
       const name_ = obj[i].name;
       const box_art_url_ = obj[i].box_art_url;
       const sql = 'INSERT INTO mySampleTable (id, name, box_art_url) VALUES ('+id_+', '+name_+', '+box_art_url_+')';
    
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.log("Successful Query xD");
      
    });
}
    });


/*app.get('/', function (req, resp) {
// about my sql 
connection.query("SELECT * FROM mySampleTable", function (error,rows,fields){
//callback function
if(!!error) {
    console.log('Error in Query');
}
else{
    console.log('Sucessful Query');
}
});
})
//app.listen (1337)
*/

/*
//var sphp = require('sphp');
var express = require('express');
var mysql = require('mysql');
var app = express();
//app.use(sphp.express('public/'));
//app.use(express.static('public/'));
//var exec = require("child_process").exec;
//app.get('/', function(req, res){exec("php databse.php", function (error, stdout, stderr) {res.send(stdout);});});
var connection = mysql.createConnection ({
    //properties
    host: 'sql5.freemysqlhosting.net',
    user: 'sql5441530',
    password: 'MUCkJUKs9j',
    database: 'sql5441530'
});
var exec = require("child_process").exec;
app.get('/', function(req, res){exec("php databse.php", function (error, stdout, stderr) {res.send(stdout);});});
/*
connection.connect(function(error){
    if(!!error){
        console.log ('Error');

    }
    else {
        console.log('You Are Connected')
 
    }
});
*/
/*connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO mySampleTable (id, name, box_art_url) VALUES ('1', 'testdata', 'test')" ;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Successful Query xD");
    });
  });
*/
  /////

  /*const api_url = 'https://api.twitch.tv/helix/games/top';
  async function getTopGames() {
   const response = await fetch(api_url);
   const data = await response.json();
   console.log(data)  
  }
  getTopGames();
*/
/*
  connection.connect(function(err,res) {
    if (err) throw err;
    console.log("Connected!");
obj = res;

    for (var i=0; i <obj.length; i++){
       const id_ = obj[i].id;
       const name_ = obj[i].name;
       const box_art_url_ = obj[i].box_art_url;
       const sql = 'INSERT INTO mySampleTable (id, name, box_art_url) VALUES ('+id_+', '+name_+', '+box_art_url_+')';
    
    connection.query(sql, function (err, res) {
        if (err) throw err;
        console.log("Successful Query xD");
      
    });
}
    });

*/

/////
//Parse data from JSON POST and insert into MYSQL
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////