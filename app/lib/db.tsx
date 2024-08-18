import { createPool } from 'mysql2'
import dotenv from "dotenv";

dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'mydb',
    port: 3306,
})

/*pool.getConnection((err, conn) => {
    if (err) console.log('Error connecting to db...')
    else console.log('Connected to db...!')
    conn.release()
})*/

export default pool.promise()


