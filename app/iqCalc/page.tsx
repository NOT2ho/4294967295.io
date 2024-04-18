let ip: any
let pf: any
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");
import { headers } from 'next/headers'

export default async function iqCalc() {

    async function ipconfig() {
        {
            const header = headers()
            const ip = (header.get('fly-client-ip') ?? '127.0.0.1').split(',')[0]
            return (ip)
        }
    }


    async function normalDtn() {
        ip = await ipconfig()
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
        pf = dis.ppf(yourIQ())
        //   console.log(pf)
        // let iq2 = yourIQ() * 100
        //    console.log(yourIQ() * 100)

    }
    await normalDtn()

    return (`당신의 ip는 ${ip}이며 이를 통해 추정한 당신의 IQ는 ${pf}입니다.`)


}
