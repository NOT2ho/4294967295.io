export default async function RegExCreate() {
    const regex = /^t.?e+[^s-t]*/i

    const genRandStr = (num: number) => {
        const arr = ["아니", "근데", "진짜", "뭐냐"];
        let res = '';
        for (let i = 0; i < num; i++) {
            res += arr[(Math.floor(Math.random() * arr.length))];
        }
        return res;
    }


    const getRandNum = () => {
        const num = Math.floor(Math.random() * 100)
        return num;
    }

    const callGenRandStr = () => {
        for (let i = 0; i < 100; i++)
            console.log(genRandStr(getRandNum()))
    }

    return (<>{callGenRandStr()}</>)
}
