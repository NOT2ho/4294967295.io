"use server"
import pool from "../lib/db";

export async function select() {

    try {
        const sql = 'SELECT * FROM nya ORDER BY id DESC LIMIT 1'

        const rows = await pool.query(sql);
        return Object.values(rows[0])[0]['body']

        console.log(Object.values(rows[0])[0]['body']);

    } catch (err) {
        console.log(err);
        return "";
    }
}