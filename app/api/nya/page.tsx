import type { NextApiRequest, NextApiResponse } from 'next'

export default async function nya(
    req: any,
    res: any
) {
    const data = req.body


    const Random: any = async (num: Number) => {
        const i = Number(num)


        let sttEng = ["ya", "ywe", "yweo", "wa", "ae", "i", "mi"]
        let endEng = ["ong", "ung", "yong"]
        let midEng = ["o", "u", "yo", "eu", "yu", "a", "i", "ae", "yea", "e"]

        const getRandomInt = (Max: Number) => {
            return Math.floor(+Math.random() * +Max)
        }

        let strEng = sttEng[getRandomInt(sttEng.length - 1)]
        if (i < 30) {


            for (let j = 0; j < i; j++) {
                strEng = strEng + midEng[getRandomInt(midEng.length - 1)]
            }
            strEng = strEng + endEng[getRandomInt(endEng.length - 1)]

        }
        else
            strEng = "Keun su an dwoe"

        return strEng;
    }


    const id = await Random(Number(data))
    res.status(200).json(id)

}