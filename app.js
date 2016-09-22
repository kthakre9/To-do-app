var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');
var meal = require('./app/model/mealsModel');
var grocery = require('./app/model/groceryModel');
var connection = require('./connection');

var app = express();
connection.init();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json
app.use(express.static(path.join(__dirname, 'app')));


//Get all Grocery Items
app.get('/groceries', function (req, res) {
  grocery.get(res);
});


//Get all meals
app.get('/meals', function (req, res) {
  meal.get(res);
});

//Post a meal
app.post('/meals', function (req, res) {
  meal.create(req.body, res);
});

//Get single meal
app.get('/meals/:id', function (req, res) {
  meal.getById(req.query.id, res);
});

//Update a meal
app.put('/meals/:meal_id', function(req,res){
  meal.update(req.body, req.query.id, res);
});

//Delete a meal
app.delete('/meals/:meal_id', function(req,res){
  console.log(req.query.id);
  meal.delete(req.query.id, res);
});

// listen (start app with node server.js) ======================================
app.listen(8080,function(){
  console.log('Node server running @ http://localhost:8080')
});

module.exports = app;
