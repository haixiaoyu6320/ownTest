var express = require('express');
var router = express.Router();
var userDataBase = require('../model/userDatabase.js');

/*get store router*/
router.get('/', function (req, res, next) {
     console.log('question---', req.session);
    
})

/*get product router*/
router.get('/product', function (req, res, next) {
    
}).post('/product',function(req,res,next){
     
})


/*get store router*/
router.get('/payment', function (req, res, next) {
    
}).post('payment',function(req,res,next){
     
})


module.exports = router;