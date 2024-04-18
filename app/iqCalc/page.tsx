//let ip: any
//let pf: any
"use server"
import { headers } from 'next/headers'

async function ipconfig() {
    const FALLBACK_IP_ADDRESS = '0.0.0.0'
    const forwardedFor = headers().get('x-forwarded-for')

    if (forwardedFor) {
        //console.log(forwardedFor)
        return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS
    }

    return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS
}
//console.log(ipconfig())

export default async function iqCalc() {
    async function normalDtn() {
        const ip = await ipconfig()
        const arr = ip.split('.')

        const ipNumStr = parseInt(arr[0]) + parseInt(arr[1]) + parseInt(arr[2]) + parseInt(arr[3])
        let ipNum = Number(ipNumStr);

        //   console.log(ipNum)
        let sigma = 203.69461619698555 * 203.69461619698555

        let gaussian = require('gaussian');
        let distribution = gaussian(549.9299763965381, sigma);
        let iq = distribution.pdf(ipNum)
        //  let pp = distribution.cdf(ipNum)
        let pp = distribution.cdf(ipNum)


        console.log(iq)
        console.log(pp)

        function yourIQ() {
            iq = 1 - pp
            //if (iq > 1)
            //     iq = 1
            // else
            //    iq = iq
            return (iq)
        }
        const dis = gaussian(100, 512);
        const pf = dis.ppf(yourIQ())
        //   console.log(pf)
        // let iq2 = yourIQ() * 100
        //    console.log(yourIQ() * 100)

        return pf

    }

    return (

        `당신의 ip는 ${await ipconfig()}이며 이를 통해 추정한 당신의 IQ는 ${await normalDtn()}입니다.`

    )

}
