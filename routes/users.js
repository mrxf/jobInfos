var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var info = {
    username : 'trinity',
    password : 'girlisyou'
  }
  res.json(info);
});

module.exports = router;
