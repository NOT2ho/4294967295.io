const readXlsxFile = require('read-excel-file/node');

export default function readIP() {
    readXlsxFile("./ip.xlsx").then((rows: any) => {
        console.log(rows);
        let num = 0;
        let b = 0
        for (let i = 0; i < rows.length; i++) {
            //console.log(rows.flat()[i])
            const arr = rows.flat()[i].split('.')

            const ipNumStr = parseInt(arr[0]) * 1000000000 + parseInt(arr[1]) * 1000000 + parseInt(arr[2]) * 1000 + parseInt(arr[3])
            const ipNum = Number(ipNumStr);

            //  let b = ipNum - 92940991.34539732
            b += ((ipNum - 154706378520.7907) * (ipNum - 154706378520.7907))
            num += ipNum
            console.log(num)
        }
        let a = num / rows.length
        let std = Math.sqrt(b / (rows.length - 1))
        console.log(a)
        console.log(std)
    });
}
