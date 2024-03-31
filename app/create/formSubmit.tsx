'use server'
import { redirect } from 'next/navigation'
import pool from "../lib/db";

export async function FormSubmit(formData: FormData) {

    console.log(formData.get('body'))
    const param = formData.get('body')
    const sql = 'INSERT INTO memo (body) VALUES ("?")'
    try {
        const result = await pool.query(sql, [param])
        console.log(result)
    } catch (err) {
        console.log(err)
    }

    redirect('./read2')
}
