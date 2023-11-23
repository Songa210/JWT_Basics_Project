const CustomAPIError = require('./custom-error')
const {statussCodes} = require('http-status-codes')

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statussCode = statussCodes.UNAUTHORIZED
      
    }
  }
  
  module.exports = UnauthenticatedError