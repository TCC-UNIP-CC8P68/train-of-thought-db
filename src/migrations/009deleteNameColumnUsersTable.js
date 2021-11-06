const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.removeColumn('Users', 'name');
}

async function down({ context: queryInterface }) {
  queryInterface.addColumn('Users', 'name', {
    type: Sequelize.STRING,
    allowNull: false
  });
}

module.exports = { up, down };
