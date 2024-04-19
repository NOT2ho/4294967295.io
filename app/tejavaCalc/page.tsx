
"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import { redirect } from 'next/navigation'


export default function TejavaCalc() {


    const { pending } = useFormStatus()
    return (

        <form action={FormSubmit}  >
            <p>
                <textarea name="body" placeholder="체중 입력(숫자만)."></textarea>
            </p>
            <p><input type="submit" value="이상한거 쓰면 NaN 나옴" disabled={pending} /></p>
        </form >


    )
}




export let die: any
export function FormSubmit(formData: FormData) {

    const param = Number(formData.get('body'))
    die = 0.25 * param / 0.55 * 1000


    redirect('./death')


}
