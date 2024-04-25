"use server"
import pool from "../lib/db";

export async function select() {

    try {
        const sql = `SELECT "body" FROM "nya" ORDER BY "id" DESC LIMIT 1`

        const [rows, fields] = await pool.query(sql);

        console.log(rows);
        console.log(fields);
        const res = fields.toString()
        return res;
    } catch (err) {
        console.log(err);
        return "";
    }
}