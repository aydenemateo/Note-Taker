const express = require ('express');
const app = express();

const api = require ('./api');
const html = require ('./html');

app.use ('/api', api);
app.use ('/', html);