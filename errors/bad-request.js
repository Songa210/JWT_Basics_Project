const CustomAPIError = require('./custom-error')
const {statusCodes} = require('http-status-codes')
class BadRequest extends Error {
    constructor(message) {
      super(message)
      this.statussCode = StatusCodes.BAD_REQUEST
      
    }
  }
  
  module.exports = BadRequest