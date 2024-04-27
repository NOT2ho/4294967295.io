'use server'
import { redirect } from 'next/navigation'
import pool from "../lib/db";
import { select } from '../meowServer/select';

export async function FormSubmit(formData: FormData) {


    const num = formData.get('int')
    console.log(typeof num)

    let sttEng = ["ya", "ywe", "yweo", "wa", "ae", "i", "mi"]
    let endEng = ["ong", "ung", "yong"]
    let midEng = ["o", "u", "yo", "eu", "yu", "a", "i", "ae", "yea", "e"]

    ///const Random = async (num: number) => {
    const i = Number(num)
    console.log(i)

    const getRandomInt = (Max: number) => {
        return Math.floor(Math.random() * +Max)
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

    //      return strEng;
    //}

    const sql = 'INSERT INTO nya (body) VALUES (?)';
    const result = await pool.query(sql, [strEng]);
    console.log(result);

    //select(0)
    redirect('./meowClient')
}