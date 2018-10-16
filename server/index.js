const express = require('express');
var cors = require('cors')
const app = express(cors());
const port = 3000;

var fs = require("fs");

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getData(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

const data = getData('activity_feed.json');

app.get('/', (req, res) => res.send(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))