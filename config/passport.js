var passport = require("passport")
var LocalStrategy = require("passport-local").Strategy
var db = require("../db/models")

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  (email, password, done)=> {
  
    db.User.findOne({
      where: {
        email: email
      }
    })
    .then(dbUser=> {
    
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        })
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        })
      }
    
      return done(null, dbUser)
    })
  }
))

passport.serializeUser((user, cb)=> {
  cb(null, user)
})

passport.deserializeUser((obj, cb)=> {
  cb(null, obj)
})

module.exports = passport