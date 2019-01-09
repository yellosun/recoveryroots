'use strict'
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 1,
                    msg: 'Must provide a first name.'
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 1,
                    msg: 'Must provide a last name.'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'This email is already in use.'
            },
            validate: {
                len: {
                    args: 1,
                    msg: 'Must provide an email.'

                },
                isEmail: {
                    msg: 'Must provide valid email.'
                }
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: {
                    args: 1,
                    msg: 'Must provide a password.'

                },
            }
        }
    }, {})
      User.prototype.validPassword = function(password) {
        console.log('PASSWORD ~>', password)
        return bcrypt.compareSync(password, this.password)
    },
      User.hook("beforeCreate", function(user) {
        console.log('USER ~>', user)
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    }),
      User.associate = function(models) {
        User.hasMany(models.Blog, {
            foreignKey: 'userId',
            as: 'Blogs'
        })
    }
    return User
}