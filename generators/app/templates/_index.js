const bodyParser = require('body-parser');
const isLambda = require('is-lambda');
const express = require('express');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS Middleware for OPTIONS requests
app.use(function (req, res, next) {
  if (req.method === 'OPTIONS') {
    var headers = {};
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = true;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "Accept,Authorization,Cache-Control,Content-Type,DNT,If-Modified-Since,Keep-Alive,Origin,User-Agent,X-Requested-With,X-HTTP-Method-Override";
    res.writeHead(204, headers);
    res.end();
  } else {
    next();
  }
});

// The rest of CORS
app.use(require('cors')());


/**
 * Hello World (Yeoman-themed GET Request)
 */
app.get('/', function (req, res) {
  res.send('Hello, Governer!')
});




/**
 * Static directory (optional)
 */
app.use(express.static('static'));

/**
 * Module Exports for Lambda deployment, and Express server listener for testing
 */
if (!isLambda) app.listen(3333, function () {
  console.log('App listening on port 3333!')
});

module.exports = app;
