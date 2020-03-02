var createError = require('http-errors');
express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose = require('mongoose');
jwt = require('jsonwebtoken');
expressJwt = require('express-jwt');
mongoose.connect('mongodb://localhost:27017/schoolApp', { useNewUrlParser: true,useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false }).then(
  () => { console.log('connected'); },
  err => { console.log(err); }
);
crypto = require('crypto');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var schoolRouter = require('./routes/school');
var accountRouter = require('./routes/account');
var expensecategoryRouter = require('./routes/expensecategory');
var expenseRouter = require('./routes/expense');
var permissionRouter = require('./routes/permission');
var app = express();

// view engine setup
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/school', schoolRouter);
app.use('/expensecategory', expensecategoryRouter);
app.use('/expense', expenseRouter);
app.use('/account', accountRouter);
app.use('/permission', permissionRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
