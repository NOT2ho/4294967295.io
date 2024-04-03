import { createPool } from 'mysql2'

const pool = createPool({
    host: '4294967295.io',
    user: 'xor2ho',
    password: 'whatislove1024',
    database: 'xor2ho',
    port: 3306,
})

/*pool.getConnection((err, conn) => {
    if (err) console.log('Error connecting to db...')
    else console.log('Connected to db...!')
    conn.release()
})*/

export default pool.promise()


