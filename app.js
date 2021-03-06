const express = require('express');

// init app
const app = express();

// Views location

app.set('views', __dirname + '/views');

// Setting template engine
app.set('view engine', 'ejs');

// Setup MongoDB

const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/todolist';

// Connecting to MongoDB

MongoClient.connect(mongoURL, function(err, db){
  if (err) {
    console.log(err);
  } else {

  console.log('Database connected succesfully!');
    todos = db.collection('todos');
  }
});

//routes
app.get('/', function(req, res) {
  res.render("index", {name: "Faqja fillestare", title: "Index"});
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/todos:id', function(req, res){
  res.render('show');
});

app.post('/todos/add', function(req, res){
  res.redirect("/");
});

app.get('/todos/edit/:id', function(req, res){
  res.render('edit');
});

app.post('/todos/update/:id', function(req, res){
  res.redirect("/");
});

app.get('/todos/delete/:id', function(req, res){
  res.redirect("/");
});

//running app

app.listen(3000, function() {
  console.log("App running at http://localhost:3000");
});
