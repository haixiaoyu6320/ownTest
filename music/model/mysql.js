var Sequelize = require('sequelize');

var config = {
  host: 'localhost',
  database: 'test',
  username: 'root',
  password: 'RY1225',
  port: 3306
};
var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: 3306, //默认
  dialect: 'mysql',
  timestamps: false,
  // operatorsAliases: false,
  // 使用连接池来减少数据库连接超载并提高速度
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    'underscored': false,
    'charset':'utf8'
}
}) 

module.exports = sequelize;