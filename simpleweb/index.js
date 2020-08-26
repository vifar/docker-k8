const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi there you peons')
});

app.listen(8080, () => {
    console.log('Listening on post 8080')
});