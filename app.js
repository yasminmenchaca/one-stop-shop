const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from One Stop Shop");
});

app.listen(8080, () => {
    console.log("Hi");
});