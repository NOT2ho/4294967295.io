import pool from "../lib/db";

export default function MarkovResult() {
    
    async function db() {
        try {
            const sql = 'SELECT * FROM markov ORDER BY id DESC LIMIT 1'

            const rows = await pool.query(sql);
            const row = rows[0][0]['body']
            return row
            
        } catch (err) {
            console.log(err);
            return
        }
    }

    return (db())
}