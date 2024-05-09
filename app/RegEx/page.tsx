export default async function RegExCreate() {
    const regex = /(^4.t?e+[^s-t]*\W{2,9}l)O?|([4-9]([^6]|7){2}v)E?(\D{9}5$)/i

    const Create = () => {
        {
            for (let i = 0; i < 0xFFFFFF; i++) {

                let randStr = String.fromCharCode(Math.random() * 0x5d + 0x21)
                let iRandStr = ""
                for (let j = 0; j < 64; j++) {
                    randStr = randStr + String.fromCharCode(Math.random() * 0x5d + 0x21)
                    iRandStr = i.toString(16).padStart(6, "0") + "//" + randStr
                }
                const isMatch = regex.test(randStr)
                if (isMatch == true)
                    console.log(iRandStr)
                //else
                // console.log("not matched")

            }
            console.log("끝")
        }

    }
    return (<>--</>)
}
