module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: '',
  database: 'aluno',
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
},
  timezone: '-03:00'
}