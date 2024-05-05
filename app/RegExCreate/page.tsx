export default async function RegExCreate() {
    const regex = /^t.?e+[^s-t]*/i

    const Create = () => {
        {
            for (let i = 0; i < 10000; i++) {
                const randStr = String.fromCharCode(Math.random() * 26 + 65) + String.fromCharCode(Math.random() * 52 + 75) + String.fromCharCode(Math.random() * 52 + 65) + " " + String.fromCharCode(Math.random() * 26 + 65) + String.fromCharCode(Math.random() * 52 + 65) + String.fromCharCode(Math.random() * 52 + 65) + " " + String.fromCharCode(Math.random() * 26 + 65) + String.fromCharCode(Math.random() * 52 + 65) + String.fromCharCode(Math.random() * 52 + 65)
                //const randStr = String.fromCharCode(Math.random() * 52 + 65) + String.fromCharCode(Math.random() * 11172 + 0xAC00) + String.fromCharCode(Math.random() * 11172 + 0xAC00)
                const isMatch = regex.test(randStr)

                if (isMatch == true)
                    console.log(randStr)
                //else
                // console.log("not matched")

            }
            console.log("끝")
        }

    }
    return (<>{Create()}</>)
}
