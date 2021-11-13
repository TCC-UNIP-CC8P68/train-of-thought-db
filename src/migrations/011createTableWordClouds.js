const { Sequelize } = require('sequelize');

async function up({ context: queryInterface}) {
  queryInterface.createTable('WordClouds', {
    userId: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Users",
        key: 'id'
      },
      allowNull: false
    },
    wordCloud: {
      type: Sequelize.DataTypes.BLOB,
      allowNull: false
    }
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('WordClouds');
}

module.exports = { up, down };
