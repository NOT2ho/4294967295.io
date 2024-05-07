'use client'
import React from 'react'
import { FormSubmit } from './formSubmit'

export default function Create() {


    return (
        <form action={FormSubmit} >
            <p>
                <input type="number" name="int" placeholder="int, n<33, 음수넣지마"></input>
            </p>
            <p><input type="submit" value="소리 안 나면 사용자(브라우저) 문제" /></p>
        </form >

    )
}




