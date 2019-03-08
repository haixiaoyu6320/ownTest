var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.session.userinfo) {
      console.log('has session---------------',req.session);
      res.redirect('/html/index.html');
    } else {
      console.log('no session---------------');
      res.redirect('login');
    }
  })
  .post('/', function (req, res, next) {
 
  })

module.exports = router;