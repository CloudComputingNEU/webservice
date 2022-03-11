module.exports = Object.freeze({
  MYSQL_USERNAME: process.env.dbUser,
  MYSQL_PASSWORD: process.env.dbPass,
  SERVER_PORT:80,
  SALT_ROUND:10,
  HOST:process.env.dbHost,
  DATABASE:'webserver'
});