
"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'

export default function BbpmCalc() {

    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState(0);
    const [val2, setVal2] = React.useState(0);
    const [hide, setHide] = React.useState(false);

    const FormSubmit = (formData: FormData) => {
        const bpm = Number(formData.get('bpm'))
        const kcal = Number(formData.get('kcal'))
        const time = kcal / bpm / 0.04 * 2

        setVal(time)
        setVal2(bpm)
        setHide(true)
    }

    return (
        <form action={FormSubmit}  >
            <p>
                <textarea name="bpm" placeholder="BPM 입력(숫자만, float)"></textarea>
            </p>
            <p>
                <textarea name="kcal" placeholder="당신이 먹은 열량(숫자만, kcal, float)"></textarea>
            </p>
            <p><input type="submit" value="NaN: 사용자 문제" disabled={pending} />
            </p>{hide ? <p>당신이 먹은 음식은 {val2}BPM의 음악에 맞춰 {val}분간 걸으면 전부 산화됩니다.</p> : <p></p>}
        </form >
    )
}