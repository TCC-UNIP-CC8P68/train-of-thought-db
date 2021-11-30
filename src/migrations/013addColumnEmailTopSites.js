const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('TopSites', 'email', {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('TopSites', 'email');
}

module.exports = { up, down };
