var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var meal = require('./app/model/mealsModel');
var connection = require('./connection');

var app = express();
connection.init();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json
app.use(express.static(path.join(__dirname, 'app')));

//Get all meals
app.get('/meals', function (req, res) {
  meal.get(res);
});

//Post a meal
app.post('/meals', function (req, res) {
  console.log("request body",req.body);
  meal.create(req.body, res);
});

//Get single meal
app.get('/meals/:meal_id', function (req, res) {

});

//Delete a meal
app.delete('/meals/:meal_id', function(req,res){

});

//Update a meal
app.put('/meals/:meal_id', function(req,res){

});



// listen (start app with node server.js) ======================================
app.listen(8080,function(){
  console.log('Node server running @ http://localhost:8080')
});

module.exports = app;
