import mysql from 'mysql'

export const cadaster = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Jk012020@',
  database:'Dev'
})