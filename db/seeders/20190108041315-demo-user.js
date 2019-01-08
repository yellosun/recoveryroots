'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'Violet',
        lastName: 'Moon',
        email: 'demo@demo.com',
        password: 'giraffe'
      }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {})
  }
}
