import Image from "next/image";
import Link from 'next/link'
import React from "react";

export default async function Home() {
    return (
        <>

            <Link href="/create">의견개진란</Link> <br></br>
            <Link href="/iqCalc">iq 추적기</Link> <br></br>
            <Link href="/TejavaCalc">데자와 계산기</Link><br></br>
            <Link href="/BpmCalc">BPM-kcal 소모시간 계산기</Link><br></br>
            <Link href="/CatMeow">야옹 생성기</Link><br></br>
            <Link href="IsPImplyQ">명제 생성기</Link><br></br>
            <Link href="AssumeLife">잔여수명 측정기</Link><br></br>

            <img src="/nodejs.gif"></img>
        </>
    )
}
