'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Blogs', [{
        title: 'Bonjour du monde!',
        body: 'hello imma blog',
        headerImg: 'meep.jpg',
        uri: 'bonjour-du-monde',
        category: 'physical',
        userId: 1,
      }], {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Blogs', null, {})
  }
}
