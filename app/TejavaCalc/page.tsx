
"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import {useFormStatus} from 'react-dom'

export default function TejavaCalc() {
   
    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState(0);

    const FormSubmit = (formData: FormData) => {
        const param = Number(formData.get('body'))
        const die = 0.25 * param / 0.55 * 1000
        console.log(die)

        setVal(die)
    }

    return (       
         <form action={FormSubmit}  >
            <p>
                <textarea name="body" placeholder="체중 입력(int, kg)."></textarea>
            </p>
            <p><input type="submit" value="NaN 나오면 문맹이라는 뜻임" disabled={pending} /></p><p>{val}</p>
        </form >
    )
}