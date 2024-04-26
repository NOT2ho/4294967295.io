'use server'
import { redirect } from 'next/navigation'
import pool from "../lib/db";

export async function FormSubmit(formData: FormData) {


    const param = formData.get('body')

    let sttEng = ["ya", "ywe", "yweo", "wa", "ae", "i", "mi"]
    let endEng = ["ong", "ung", "yong"]
    let midEng = ["o", "u", "yo", "eu", "yu", "a", "i", "ae", "yea", "e"]

    const Random = async (num: any) => {
        const i = Number(num)


        const getRandomInt = (Max: number) => {
            return Math.floor(+Math.random() * +Max)
        }

        let strEng = sttEng[getRandomInt(sttEng.length - 1)]
        if (i < 33) {


            for (let j = 0; j < i; j++) {
                strEng = strEng + midEng[getRandomInt(midEng.length - 1)]
            }
            strEng = strEng + endEng[getRandomInt(endEng.length - 1)]

        }
        else
            strEng = "Keun su an dwoe"

        return strEng;
    }

    const sql = 'INSERT INTO nya (body) VALUES (?)';
    const result = await pool.query(sql, [await Random(param)]);
    console.log(result);


    redirect('./midMeow')
}

