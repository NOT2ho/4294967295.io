
"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'
import readFile from './readFile'

export default function AssumeLife() {



    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState(0);
    const [hide, setHide] = React.useState(false);

    const FormSubmit = (formData: FormData) => {
        const param = Number(formData.get('body'))
        let num = 0
        if (param % 10 < 5)
            num = Math.floor((param) / 10) * 10 + 4
        else
            num = Math.floor((param) / 10) * 10

        setVal(num)
        setHide(true)


    }

    return (
        <form action={FormSubmit}  >
            <p>
                <textarea name="body" placeholder="당신의 나이"></textarea>
            </p>
            <p><input type="submit" value="NaN 입력 시 일찍 죽습니다." disabled={pending} />
            </p>{hide ? <p>당신은 {readFile(val)}년 후 사망할 것으로 기대됩니다.</p> : <p></p>}
        </form >
    )
}