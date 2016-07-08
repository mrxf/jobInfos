var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 设置handlebars为默认引擎，视图目录为views
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');


// 当将favicon 放在 /public目录下之后，就取消注释下面代码
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置路由
app.use('/', routes);
app.use('/users', users);

// 捕获404 Notfound错误
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//错误处理器
//如果是在开发环境下
//就会直接使用error模板打印错误信息
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//项目错误捕获器
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
