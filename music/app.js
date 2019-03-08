var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyparser = require('body-parser');
var logger = require('morgan');
var session = require("express-session");
var Sequelize =require('sequelize');
// var ejs = require('ejs');
// var NedbStore = require('nedb-session-store')(session);

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var classRouter = require('./routes/class');
var storeRouter = require('./routes/store');
var userRouter = require('./routes/user');
var myRouter = require('./routes/my');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.engine('html', ejs.__express);

// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(cookieParser());
//session
const sessionMiddleware = session({
  secret: "userinfo", //字符串，作为服务器端生成session的签名，随便写
  //name:'session_id', //保存在本地cookie的一个名字，默认connect.sid,可不设置
  resave: false, //强制保存session即使它没有变化，建议false
  saveUninitialized: false, //强制将未初始化的session存储，建议手动添加，默认true
  cookie: {  //设置繁华到前端key的属性
    // path: '/',
    // httpOnly: true,
    // maxAge: 1000*60*60*24//   过期时间
  },
  rolling:false, //在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
  // store: new NedbStore({
    // filename: 'path_to_nedb_persistence_file.db'
  // })
})
app.use(sessionMiddleware);


app.use(express.static(path.join(__dirname, 'public')));
app.use('/helpers',express.static(path.join(__dirname, 'helpers')));
app.use('/api',express.static(path.join(__dirname, 'api')));

app.use(bodyparser.json()); // 使用bodyparder中间件，
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/class',classRouter);
app.use('/user',userRouter);
app.use('/store',storeRouter);
app.use('/my',myRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;