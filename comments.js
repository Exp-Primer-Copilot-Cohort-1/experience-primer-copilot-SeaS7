//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./models/comment');
//connect to mongodb
mongoose.connect('mongodb://localhost/comment');

//configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//set up routes
app.get('/', function(req, res){
  res.send('Please use /api/comments');
});

app.get('/api/comments', function(req, res){
  Comment.getComments(function(err, comments){
    if(err){
      throw err;
    }
    res.json(comments);
  });
});

app.post('/api/comments', function(req, res){
  var comment = req.body;
  Comment.addComment(comment, function(err, comment){
    if(err){
      throw err;
    }
    res.json(comment);
  });
});

app.put('/api/comments/:_id', function(req, res){
  var id = req.params._id;
  var comment = req.body;
  Comment.updateComment(id, comment, {}, function(err, comment){
    if(err){
      throw err;
    }
    res.json(comment);
  });
});

app.delete('/api/comments/:_id', function(req, res){
  var id = req.params._id;
  Comment.removeComment(id, function(err, comment){
    if(err){
      throw err;
    }
    res.json(comment);
  });
});

//start server
app.listen(3000);
console.log('Running on port 3000...');