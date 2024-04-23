import Image from "next/image";
import React from "react";
const basis = require('/public/basis.json')

export default async function Basis() {
    return (
        <p><h1>2호의 int</h1>
            이 페이지는, 저에 대한 정보입니다.<br></br>
            <h2>만약에 당신이 이걸 읽고 있다면, 당신은 다른 사람의 Github을 들여다보는 변태입니다.</h2><br></br>
            아무튼, 시작합니다.<br></br><br></br>
            <em>참고: github 더 뒤지면 json을 찾을 수 있겠지만 도대체 왜?</em><br></br>

            <h1>기본 정보</h1><br></br>
            {JSON.stringify(basis)}
            <h1>%</h1>
            귀찮으니 다음에.
        </p>

    )
}
