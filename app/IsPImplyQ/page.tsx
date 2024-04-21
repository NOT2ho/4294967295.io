
"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'


export default function IsPImplyQ() {
    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState("");
    const [hide, setHide] = React.useState(false);
    const FormSubmit = (formData: FormData) => {
        let i = String(formData.get('body'))

        let str = ""


        for (let j = 0; j < i.length; j++) {


            let isP = Number(i.charCodeAt(j))
            if (isP % 6 == 0) {
                str = str + "¬P"
            }
            else if (isP % 6 == 1)
                str = str + "P"
            else if (isP % 6 == 2)
                str = str + "Q"
            else if (isP % 6 == 4)
                str = str + "P"
            else if (isP % 6 == 5)
                str = str + "T"
            else
                str = str + "F"





            let arr = Number(i.charCodeAt(j))
            if (arr % 6 == 0) {
                str = str + "≡"
            }
            else if (arr % 6 == 1)
                str = str + "→"
            else if (arr % 6 == 2)
                str = str + "∧"
            else if (arr % 6 == 4)
                str = str + "∨"
            else if (arr % 6 == 5)
                str = str + "⊕"
            else
                str = str + "⊂"



        }


        let isQ = Number(i.length)
        if (isQ % 6 == 0) {
            str = str + "¬P"
        }
        else if (isQ % 6 == 1)
            str = str + "P"
        else if (isQ % 6 == 2)
            str = str + "Q"
        else if (isQ % 6 == 4)
            str = str + "P"
        else if (isQ % 6 == 5)
            str = str + "T"
        else
            str = str + "F"

        setVal(str)
        setHide(true)

    }


    return (
        <form action={FormSubmit}  >
            <p>
                <textarea name="body" placeholder="string."></textarea>
            </p>
            <p><input type="submit" value="(주의: 전사함수임!) 입력한 문장의 길이만큼 긴 명제를 생성합니다." disabled={pending} />
            </p>{hide ? <p>{val}</p> : <p></p>}
        </form >
    )

}