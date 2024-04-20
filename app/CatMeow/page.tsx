"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'


export default function CatMeow() {
    let stt = ["야", "왜", "웨", "와", "애", "이"]
    let end = ["옹", "웅", "용"]
    let mid = ["오", "우", "요", "으", "유", "아", "이", "애", "얘", "에"]

    function getRandomInt() {
        return Math.floor(Math.random() * (5 - 0))
    }

    function getRandomInt3() {
        return Math.floor(Math.random() * (2 - 0))
    }
    function getRandomInt2() {
        return Math.floor(Math.random() * (9 - 0))
    }

    console.log(stt[getRandomInt()])
    console.log(mid[getRandomInt2()])
    console.log(end[getRandomInt3()])


    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState("");
    const [hide, setHide] = React.useState(false);

    const FormSubmit = (formData: FormData) => {
        const i = Number(formData.get('int'))


        let str = stt[getRandomInt()]
        for (let j = 0; j < i; j++) {
            str = str + mid[getRandomInt2()]
        }
        str = str + end[getRandomInt3()]



        setVal(str)
        setHide(true)
    }



    return (
        <form action={FormSubmit}  >
            <p>
                <textarea name="int" placeholder="int"></textarea>
            </p>
            <p><input type="submit" value="긴 울음소리 만들면 고양이가 아파합니다." disabled={pending} />
            </p>{hide ? <p>{val}</p> : <p></p>}
        </form >
    )




}