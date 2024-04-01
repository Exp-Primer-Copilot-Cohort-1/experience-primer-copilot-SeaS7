//create web server
const express = require('express');
const app = express();
//create a port
const port = 3000;
//create a path
const path = require('path');
//create a body parser
const bodyParser = require('body-parser');
//create a fs
const fs = require('fs');
//create a json file
let comments = require('./comments.json');
//create a json file
let users = require('./users.json');
//create a json file
let posts = require('./posts.json');
//create a json file
let likes = require('./likes.json');
//create a json file
let commentsLikes = require('./commentsLikes.json');
//create a json file
let commentsDislikes = require('./commentsDislikes.json');
//create a json file
let postsLikes = require('./postsLikes.json');
//create a json file
let postsDislikes = require('./postsDislikes.json');
//create a json file
let usersLikes = require('./usersLikes.json');
//create a json file
let usersDislikes = require('./usersDislikes.json');

//create a static file
app.use(express.static('public'));
//create a body parser
app.use(bodyParser.urlencoded({ extended: false }));
//create a body parser
app.use(bodyParser.json());
//create a get
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
//create a get
app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});
//create a get
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'users.html'));
});
//create a get
app.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname, 'posts.html'));
});
//create a get
app.get('/likes', (req, res) => {
    res.sendFile(path.join(__dirname, 'likes.html'));
});
//create a get
app.get('/commentsLikes', (req, res) => {
    res.sendFile(path.join(__dirname, 'commentsLikes.html'));
});
//create a get
app.get('/commentsDislikes', (req, res) => {
    res.sendFile(path.join(__dirname, 'commentsDislikes.html'));
});
//create a get
app.get('/postsLikes', (req, res) => {
    res.sendFile(path.join(__dirname,