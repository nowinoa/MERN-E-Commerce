// whenever someone uses a different route we will send an error
// such as /api/prod -> this will show that is not found
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); //this triggers the error handling - next block of code
};

//error handling middleware = app.use(err, req, res, next) is used to handle errors
// express identifies it as error handling middleware bc of the 4 arguments passed
// this will run when the system gets a next(err)
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
