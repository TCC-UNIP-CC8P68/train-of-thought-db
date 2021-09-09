const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('Configurations', 'allowCapture', {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('Configurations', 'allowCapture');
}

module.exports = { up, down };
