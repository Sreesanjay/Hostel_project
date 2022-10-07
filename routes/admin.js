var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req,res, next) {
  res.render('Admin/announcement',{admin:true});
});


router.post('/announcement', function(req,res, next) {
console.log('req.body')

});

module.exports = router;
