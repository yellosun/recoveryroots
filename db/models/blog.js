'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    description: DataTypes.TEXT,
    uri: DataTypes.STRING,
    category: DataTypes.STRING,
    headerImg: DataTypes.STRING,
    render: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};