var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/info', function(req, res, next) {
  var info = {
    username : 'trinity',
    password : 'girlisyou'
  }
  res.json(info);
});
router.get('/',function(req,res,next) {
  res.render('user',{title:'用户信息'})
})

module.exports = router;
