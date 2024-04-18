let ip: any
let pf: any

export default async function iqCalc() {

    async function ipconfig() {
        const ipData = await fetch('https://geolocation-db.com/json/');
        const locationIp = await ipData.json();
        //   console.log(locationIp.IPv4);
        return (locationIp.IPv4)
    }


    async function normalDtn() {
        ip = await ipconfig()
        const arr = ip.split('.')

        const ipNumStr = parseInt(arr[0]) * 1000000000 + parseInt(arr[1]) * 1000000 + parseInt(arr[2]) * 1000 + parseInt(arr[3])
        let ipNum = Number(ipNumStr);
        if (ipNum < 9255255255)
            ipNum = ipNum
        else if (9255255255 <= ipNum && ipNum <= 99255255255)
            ipNum = ipNum / 50
        else ipNum = ipNum / 500

        //   console.log(ipNum)
        let sigma = 38532449364.348724 * 38532449364.348724

        let gaussian = require('gaussian');
        let distribution = gaussian(54706378520.7907, sigma);
        let iq = distribution.pdf(ipNum)
        //  let pp = distribution.cdf(ipNum)
        let pp = distribution.cdf(ipNum)


        //  console.log(iq)
        //  console.log(pp)

        function yourIQ() {
            iq = Math.abs((pp - 0.9999999999999999)) * 100
            if (iq > 1)
                iq = 1
            else if (iq < 0)
                iq = 0
            else
                iq = iq
            return (iq)
        }
        const dis = gaussian(100, 0.24);
        pf = dis.ppf(yourIQ())

        //   console.log(pf)
        // let iq2 = yourIQ() * 100
        //    console.log(yourIQ() * 100)

    }
    await normalDtn()

    return (`당신의 ip는 ${ip}이며 이를 통해 추정한 당신의 IQ는 ${pf}입니다.`)


}
