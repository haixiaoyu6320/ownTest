var express = require('express');
var router = express.Router();
var classDataBase = require('../model/classDatabase.js');
/* GET class Router*/
router.get('/', function (req, res, next) {
     console.log('free---');
     classDataBase.findAllClassInfo()
     .then(result=>{
          res.send(result);
     })


}).post('/', function (req, res, next) {

})


/* Get search Router*/
router.get('/search', function (req, res, next) {
     console.log('this is search router----');
     console.log('req.query----',req.query);
     classDataBase.findClassInfoByCategory({
          category:req.query.category
     })
     .then(result=>{
          res.send(result);
     })
})
     .post('/search', function (req, res, next) {
          console.log('search-----------',req.body)
          classDataBase.findClassInfoByCategory({
               category:req.body.category
          })
          .then(result=>{
               res.send(result);
          })

     })


module.exports = router;