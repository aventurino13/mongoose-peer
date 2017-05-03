var express = require ('express');
var mongoose = require ('mongoose');
var Gem = require ('./models/gem.js');
var bodyParser = require('body-parser');

var app = express ();

app.use ( bodyParser.json());

mongoose.connect('mongodb://localhost:27017/GemMongoosePeerDb');

app.get('/gems', function ( req, res ) {
  Gem.find({}, function ( err, gemResults){
    if ( err ){
      console.log ( err );
      res.sendStatus(500);
    }else {
      console.log('gemResults-->', gemResults);
      res.send(gemResults);
    }
  });
});

app.post('/gems', function ( req, res){
  console.log('in gemPost', req.body);

  var newGem = new Gem ({
    name: req.body.name,
    type: req.body.type,
    value: req.body.value,
    rare: req.body.rare,
    date: req.body.date
  });

  newGem.save(function ( err ) {
    if ( err ) {
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new user created');
      res.sendStatus(200);
    }
  });
});


app.listen(3456, function(){
  console.log('port up on 3456');
});
