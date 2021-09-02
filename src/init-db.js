const sequelize = require('./util/database.js')
const { Umzug, SequelizeStorage } = require('umzug');

const umzug = new Umzug({
  migrations: { glob: 'migrations/*.js' },
  context: sequelize.getQueryInterface(), 
  storage: new SequelizeStorage({
    sequelize
  }),  
  logger: console,
});

(async () => {
  await umzug.up();
})();
