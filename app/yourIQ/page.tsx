import { pf } from "../iqCalc/page"
import { ipNumStr } from "../iqCalc/page"
import iqCalc from "../iqCalc/page"


export default async function yourIQ() {
    await iqCalc()

    return (`당신의 ip는 ${ipNumStr}이며 이를 통해 추정한 당신의 IQ는 ${pf}입니다.`)

}