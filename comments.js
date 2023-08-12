//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Get the comments
app.get('/comments', (req, res) => {
    res.send('Hello World!');
});

//Create a comment
app.post('/comments', (req, res) => {
    res.send('Hello World!');
});

//Update a comment
app.put('/comments/:id', (req, res) => {
    res.send('Hello World!');
});

//Delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

