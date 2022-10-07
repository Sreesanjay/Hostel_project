var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  notification="Admission Started";
  res.render('Common/index', { commonUser:true,title: 'Boys hostel',notification });
});

router.get('/gallery', function(req, res, next) {
  res.render('Common/gallery', { commonUser:true,title: 'Gallery' });
});

router.get('/login-page', function(req, res, next) {
  res.render('Common/login-page', {commonUser:true, title: 'Login' });
});

router.get('/admission-form', function(req, res, next) {
  res.render('Common/admission-form', {commonUser:true, title: 'admission-form' });
});


module.exports = router;
