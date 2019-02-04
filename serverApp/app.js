const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const db = require('./db.js')

const app = express();
const port = process.env.port || 3600;

var usersRouter = require('./routes/users');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const validateToken = (req, res, next) => {
  return (req, res, next) => {
    //if token exists, proceed, otherwise terminate
    if (db.checkJWT()) {
      console.log('token exists');
      next();
    }
    else
      res.json({ message: 'invalid token' })

  }
}

app.use(cors())
app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//Middleware
app.use('/api', validateToken())

//Routes
app.use("/admin", require('./routes/admin'));
app.use('/api/users', usersRouter);
app.use('/api/students', require('./routes/student'));
//TO DO
// app.use("/staff", require('./routes/staff'));
// app.use("/student", require('./routes/student'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});
app.listen(port,()=>{
  console.log(`Backend server is running on the port ${port}`)
});

module.exports = app;
