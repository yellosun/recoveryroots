var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
var db = require("../db/models")

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, 
    function (email, password, cb) {
        return db.User.findOne({email, password})
           .then(user => {
               if (!user) {
                   return cb(null, false, {
                    message: 'Incorrect email or password.'
                  })
               }
               return cb(null, user, {
                message: 'Logged In Successfully'
              })
          })
          .catch(err => cb(err))
    }
))

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

module.exports = passport