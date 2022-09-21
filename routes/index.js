var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Boys hostel' });
});

router.get('/login-page', function(req, res, next) {
  res.render('login-page', { title: 'Login' });
});

router.get('/admission-form', function(req, res, next) {
  res.render('admission-form', { title: 'admission-form' });
});


module.exports = router;
