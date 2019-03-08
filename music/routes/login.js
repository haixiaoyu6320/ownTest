var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');
var userDataBase = require('../model/userDatabase.js');


/* GET login page. */
router.get('/', function (req, res, next) {
        res.render('login');
    })
    .post('/', function (req, res, next) {
        var data = {
            name: req.body.username_l,
            pwd: req.body.password_l,
        }
        userDataBase.findMsgFromLoginByNameAndPwd(data)
            .then(result => {
                console.log('result----->', result)
                if (result.code == 0) {
                    if (result.data.password == data.pwd) {
                        req.session.userinfo = {
                            user_name: result.data.name,
                            user_pwd: result.data.password
                        };
                        res.redirect('/html/index.html');
                    }
                } else {
                    res.render('login',{
                        msg_login:result.msg
                    })

                }
            }).catch(err => {
                console.log('ERR--', err);
            })

    })


/* GET register page. */
router.get('/regist', function (req, res, next) {
    res.render('login');
}).post('/regist', function (req, res, next) {

})


/* GET logout page. */
router.get('/logout', function (req, res, next) {
    res.render('login');
    req.session.userinfo = null;
});
router.post('/logout', function (req, res, next) {

})






module.exports = router;