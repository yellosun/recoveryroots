'use strict'

module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    description: DataTypes.TEXT,
    uri: DataTypes.STRING,
    category: DataTypes.STRING,
    headerImg: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {})
  Blog.associate = function(models) {
    Blog.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }
  return Blog
}