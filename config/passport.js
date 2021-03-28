const passport = require('passport')
const passportLocal = require('passport-local')
const passportJWT = require('passport-jwt')

var db = require("../db/models")
const Promise = require('bluebird')

var bcrypt = require('bcrypt')
bcrypt = Promise.promisifyAll(bcrypt, {suffix: 'Async'})

const LocalStrategy = passportLocal.Strategy
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt

passport.serializeUser((user, done) => {
    if (!user.email) {
        return done(new Error('serializeuser: user has no email'))
    }
    done(null, user.email)
})

passport.deserializeUser(async (email, done) => {
    try {
        const user = await db.User.findOne({ where: { email } })
        done(null, user)
    } catch (err) {
        done(err)
    }
})

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, async (jwtPayload, done) => {
    try {
        const user = await db.User.findOne({ where: { email: jwtPayload.email } })
        if (user === null || user === undefined) {
            return done(null, false)
        }
        done(null, user)

    } catch (err) {
        done(err, null)
    }
}))

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const user = await db.User.findOne({ where: { email } })
        if (user === null || user === undefined) {
            return done(null, false)
        }

        const isMatch = await bcrypt.compareAsync(password, user.password)
        if (isMatch) {
            done(null, user)
        } else {
            done(null, false)
        }

    } catch (err) {
        done(err, null)
    }
}))