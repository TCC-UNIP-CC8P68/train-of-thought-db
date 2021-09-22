const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('Configurations', 'dontDisturb', {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('Configurations', 'dontDisturb');
}

module.exports = { up, down };
