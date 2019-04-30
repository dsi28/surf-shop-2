const createError = require('http-errors'),
 express = require('express'),
 path = require('path'),
 cookieParser = require('cookie-parser'),
 logger = require('morgan'),
 mongoose = require('mongoose'),
 methodOverride = require('method-override');

//models
const indexRouter = require('./routes/index'),
 usersRouter = require('./routes/users'),
 postsRouter = require('./routes/posts'),
 reviewsRouter = require('./routes/reviews');

const app = express();
//db conncetion
mongoose.connect('mongodb://localhost/surf-shop2', { 
  useNewUrlParser: true,
  useCreateIndex: true }); //changed db url from surf-shop to surf-shop-mapbox while in mapbox branch
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
  console.log('Connected to db...');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

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