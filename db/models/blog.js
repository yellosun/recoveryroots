'use strict'

module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    category: DataTypes.STRING,
    uri: DataTypes.STRING,
    headerImg: DataTypes.STRING
  }, {})
  Blog.associate = function(models) {
    Blog.belongsTo(models.User)
  }
  return Blog
}