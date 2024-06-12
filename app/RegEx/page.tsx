export default async function RegExCreate() {
    const regex = /냥[야-옹]{2}/

    const Create = () => {
        {
            for (let i = 0; i < 0xFFFFFFF; i++) {

                let randStr = String.fromCharCode(Math.random() * 0x2BA3 + 0xAC00)
                let iRandStr = ""
                for (let j = 0; j < 32; j++) {
                    randStr = randStr + String.fromCharCode(Math.random() * 0x2BA3 + 0xAC00)
                    iRandStr = i.toString(16).padStart(7, "0") + "//" + randStr
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
    return (<>{Create()}</>)
}