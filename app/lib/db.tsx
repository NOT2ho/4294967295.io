import { createPool } from 'mysql2'

const pool = createPool({
    host: 'my5701.gabiadb.com',
    user: 'not2ho',
    password: 'whatislove1024',
    database: 'mydb',
    port: 3306,
})

/*pool.getConnection((err, conn) => {
    if (err) console.log('Error connecting to db...')
    else console.log('Connected to db...!')
    conn.release()
})*/

export default pool.promise()


