// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a variable to store comments
let comments = [
    { name: 'John', comment: 'Hello, World!' }
];

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the public folder to store static files
app.use(express.static('public'));

// Use the body-parser library to parse request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Respond to GET requests to the root URL
app.get('/', (req, res) => {
    res.render('comments', { comments: comments });
});

// Respond to POST requests to the root URL
app.post('/', (req, res) => {
    comments.push({ name: req.body.name, comment: req.body.comment });
    res.render('comments', { comments: comments });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});