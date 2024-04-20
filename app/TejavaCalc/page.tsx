
"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'

export default function TejavaCalc() {

    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState(0);
    const [hide, setHide] = React.useState(false);

    const FormSubmit = (formData: FormData) => {
        const param = Number(formData.get('body'))
        const die = 0.25 * param / 0.55
        console.log(die)

        setVal(die)
        setHide(true)
    }

    return (
        <form action={FormSubmit}  >
            <p>
                <textarea name="body" placeholder="체중 입력(int, kg)."></textarea>
            </p>
            <p><input type="submit" value="NaN 나오면 문맹이라는 뜻임" disabled={pending} />
            </p>{hide ? <p>당신은 데자와 {val}캔을 먹으면 1/2 확률로 죽습니다. 주의하시길</p> : <p></p>}
        </form >
    )
}