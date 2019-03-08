var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var userDataBase = require('../model/userDatabase.js');

router.get('/', function (req, res, next) {
          console.log('this is user');
     })
     .post('/', function (req, res, next) {

     })

/* GET userinfo  page. */
router.get('/userinfo', function (req, res, next) {
          if (req.session.userinfo) {
               console.log('..req.session in userinfo router is :',req.session)
               var params = {
                    name: req.session.userinfo.user_name
               }
               userDataBase.findMsgByName(params)
                    .then(result => {
                         res.send(result);
                         console.log('userinfo by req.session ',result);
                    })
          }else{
               console.log('no req.session in route userinfo');
          }
     })
     .post('/userinfo', function (req, res, next) {
          var params = {
               name: req.body.name,
          }
          userDataBase.findMsgByName(params)
               .then(result => {
                    console.log('result-post--from--userinfo-', result);
                    res.send(result);
               })

     })

/* GET updata  page. */
router.get('/updata', function (req, res, next) {})
     .post('/updata', function (req, res, next) {
          var params = {
               name: req.body.name,
               sex: req.body.sex,
               habit: req.body.habit
          }
          userDataBase.upDataToDatabase(params, req.body.origin_name)
               .then(result => {
                    console.log('result-post--from--updata-', req.session.userinfo );
                    req.session.userinfo={
                         user_name:result.name
                    } 
                    console.log('result-post--from--updata-', req.session.userinfo );
                    res.send(result);
               })

     })

/* GET addUser  page. */
router.get('/addUser', function (req, res, next) {

     })
     .post('/addUser', function (req, res, next) {
          var params = {
               name: req.body.name,
               pwd: req.body.pwd,
          }
          console.log('this is addUser - post', params);
          userDataBase.addUserToDatabase(params)
               .then(result => {
                    if (result.code == 0) {
                         req.session.userinfo = {
                              user_name: result.name,
                              user_pwd: result.password
                         };
                         res.send(result);
                    } else {
                         res.send(result);
                    }
               })
     })

module.exports = router;