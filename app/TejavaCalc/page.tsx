
"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'


export default function TejavaCalc() {
    const { pending } = useFormStatus()
    return (

        <form action={FormSubmit}  >
            <p>
                <textarea name="body" placeholder="체중 입력(숫자만)."></textarea>
            </p>
            <p><input type="submit" value="이상한거 쓰면 NaN 나옴" disabled={pending} /></p>
        </form >
        //

    )
    function Header(props: any) {
        return <h1>Develop. Preview. Ship.</h1>;
    }
}




function FormSubmit(formData: FormData) {

    const param = Number(formData.get('body'))
    const die = 0.25 * param / 0.55 * 1000

    return <p>
        당신은 데자와를 {die}캔 먹으면 0.5의 확률로 죽습니다. 주의하도록
    </p>

}