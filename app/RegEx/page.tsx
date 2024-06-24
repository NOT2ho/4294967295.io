export default async function RegExCreate() {
    const regex = /.*/

    const Create = () => {
        {
            for (let i = 0; i < 0xFFF; i++) {

                let randStr = String.fromCharCode(Math.random() * 0x5d + 0x21)
                let iRandStr = ""
                for (let j = 0; j < 64; j++) {
                    randStr = randStr + String.fromCharCode(Math.random() * 0x5d + 0x21)
                    iRandStr = i.toString(16).padStart(3, "0") + "//" + randStr
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
    return (<></>)
}

