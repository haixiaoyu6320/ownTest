var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var userDataBase = require('../model/userDatabase.js');

/* GET my page. */
router.get('/', function (req, res, next) {
    res.redirect('/html/my.html');
}).post('/', function (req, res, next) {

})

/* GET notes  page. */
router.get('/notes', function (req, res, next) {
    res.redirect('/html/my.html');
}).post('/notes', function (req, res, next) {

})

/* GET notes  page. */
router.get('/learnedClass', function (req, res, next) {
    res.redirect('/html/my.html');
}).post('/learnedClass', function (req, res, next) {

})

/* GET notes  page. */
router.get('/question', function (req, res, next) {
    res.redirect('/html/my.html');
}).post('/question', function (req, res, next) {

})


module.exports = router;