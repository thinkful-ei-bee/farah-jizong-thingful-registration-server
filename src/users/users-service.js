const UsersService = {
    validatePassword(password) {
      if (password.length < 8) {
        return 'Password must be longer than 8 characters'
      }
      if (password.length > 72) {
        return 'Password must be less than 72 characters'
      }
      if (password.startsWith(' ')){
          return 'Password must not start or end with empty spaces'
      }
    },
  }
  
  module.exports = UsersService