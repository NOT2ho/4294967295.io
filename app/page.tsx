import Image from "next/image";
import Link from 'next/link'
import React from "react";

export default async function Home() {
    return (
        <>
            제가 css 싫어하는 사람인데 테스트 때문에 그 페이지에만 css 적용하려고 시도했다가 모든 페이지에 뭔가 적용된 것 같아서 지금 좀 불쾌합니다 . -_- <br></br>
            근데 부등호 이스케이프 어케 하나요 <br></br>
            이거 유튜브랑 트위터도 입력 안 되던데 <br></br> <br></br>

            <h1>▼모든 메뉴▼</h1>

            <Link href="/create">의견개진란</Link> <br></br>
            <Link href="/iqCalc">iq 추적기</Link> <br></br>
            <Link href="/TejavaCalc">데자와 계산기</Link><br></br>
            <Link href="/BpmCalc">BPM-kcal 소모시간 계산기</Link><br></br>
            <Link href="/CatMeow">야옹 생성기</Link><br></br>
            <Link href="/IsPImplyQ">명제 생성기</Link><br></br>
            <Link href="/MeowSound">야옹 생성기 - tts</Link><br></br>
            <Link href="/formalLove">사랑은 포르말린에 담가서</Link><br></br>
            <Link href="/formalLoveTest">당신이 녹색물산에 입사한다면 일어나게 될 일</Link><br></br>

            <Link href="/pos">한국어 형태소 분석기: 허접</Link><br></br>
            <Link href="/markov">랜덤 문장 생성기 - 마코프 체인</Link><br></br>
            <img src="/nodejs.gif"></img>
        </>
    )
}
