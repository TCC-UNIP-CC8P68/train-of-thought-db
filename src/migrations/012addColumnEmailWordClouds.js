const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('WordClouds', 'email', {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('WordClouds', 'email');
}

module.exports = { up, down };
