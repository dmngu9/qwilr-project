"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(express_1.default.static('dist'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: '../dist' });
});
app.listen(8080, () => {
    console.log('hey started');
});
