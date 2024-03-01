const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithmetic service - last updated 3:35pm 2/15');
});

// addition
app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n,m);
    res.json(sum);
})

// subtraction
app.get('/subtract/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let result = subtract(n, m);
    res.json(result);
});

// multiplication
app.get('/multiply/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let result = multiply(n, m);
    res.json(result);
});

// division
app.get('/divide/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let result = divide(n, m);
    res.json(result);
});


app.listen(port);