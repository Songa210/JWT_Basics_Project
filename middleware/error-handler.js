const {CustomAPIError} = require('../errors')
const {StatusCodeS} = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
    .status(err.statusCode).json({ msg: err.message })
  }
  return res
  .status(StatusCodeS.INTERNAL_SERVER_ERRER)
  .send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware
