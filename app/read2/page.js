
import { readRange } from "./db"
import { Read2 } from "./db";

import pool from "../lib/db";
export default async function read() {
  let document;

  if (typeof document !== "undefined") {
    document.read.Read2()
  }

const output = async () => {
    "use server"
    try {

        const sql = 'SELECT * FROM memo'
      let ret = []
      const rows = await pool.query(sql);
      for (let i of rows)
        ret.push(i)
        return JSON.stringify(ret)
        //            return Object.values(rows[0])[i]['body']


    } catch (err) {
        console.log(err);
    }
}
  return (<><h1>전체 글(귀찮아서 json 안 깠음)</h1>
    <h2>여러분의 글을 찾아보세요!</h2>
    <>{await output()}</></>
  )


}