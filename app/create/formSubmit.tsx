'use server'
import useGoTo from "./useGoTo";
import query from "../lib/db";

export async function formSubmit(formData: FormData) {

    console.log(formData.get('body'))
    let body = formData.get('body')
    const sql = `INSERT INTO memo (body) VALUES ("${body}")`
    await query(sql, function (err: any, results: any, field: any) {
        if (err) throw err;
        else {
            console.log('Updated ' + results.affectedRows + ' row(s).')
        }


    })

}