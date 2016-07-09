var express = require('express');
var router = express.Router();
var spider = require('./spider');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/spider',function (req, res, next) {
	res.render('spider',{jobinfo : JSON.stringify(spider.getinfo())})
})

module.exports = router;
