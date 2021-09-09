const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.addColumn('Users', 'email', {
    type: Sequelize.STRING,
    allowNull: false
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('Users');
}

module.exports = { up, down };
