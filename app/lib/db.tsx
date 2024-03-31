import { createPool } from 'mysql2'

const pool = createPool({
    host: '4294967295.io',
    user: 'xor2ho',
    password: 'whatislove1024',
    database: 'xor2ho',
    port: 3306,
})

pool.getConnection((err, conn) => {
    if (err) console.log('Error connecting to db...')
    else console.log('Connected to db...!')
    conn.release()
})

const query = (query: any, arrParams: any) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arrParams, (err, data) => {
                if (err) {
                    console.log('Error in executing the query')
                    reject(err)
                }
                console.log('------db.jsx------')
                //console.log(data)
                resolve(data)
            })
        } catch (err) {
            reject(err)
        }
    })
}

export default query


