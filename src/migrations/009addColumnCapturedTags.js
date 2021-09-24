const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('Captures', 'capturedTags', {
    type: Sequelize.JSON,
    allowNull: true
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('Captures', 'capturedTags');
}

module.exports = { up, down };
