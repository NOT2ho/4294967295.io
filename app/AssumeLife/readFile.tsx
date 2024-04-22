"use server"

const readXlsxFile = require('read-excel-file/node');
let die = 0
export default async function readFile(Number: number) {


    readXlsxFile("../life.xlsx").then((rows: any) => {
        console.log(rows);

        for (let i = 0; rows.flat(0)[i][0] != Number; i++) {
            //console.log(rows.flat()[i])
            die = rows.flat(0)[i][1]
            console.log(die);
        }

    });
    return die
}
