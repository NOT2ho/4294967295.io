import pool from "../lib/db";
import { revalidatePath } from "next/cache";

export const Read2 = async (formData: FormData) => {
    "use server"

    const i = Number(formData.get('body'))
    try {

        const sql = 'SELECT * FROM memo'

        const rows = await pool.query(sql);
        console.log(Object.values(rows[0])[i]['body'])
        return (<>{Object.values(rows[0])[i]['body']}</>)

    } catch (err) {
        console.log(err);
        return "";
    }
}

export const readRange = async () => {
    "use server"
    try {

        const sql = 'SELECT * FROM memo'

        const rows = await pool.query(sql);
        return Object.values(rows[0]).length - 1;
        //            return Object.values(rows[0])[i]['body']


    } catch (err) {
        console.log(err);
        return "";
    }
}

