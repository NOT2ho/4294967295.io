'use client'
import React from 'react'
import { FormSubmit } from './formSubmit'

export default function Create() {


    return (
        <form action={FormSubmit} >
            <p>
                <input type="number" name="int" placeholder="int, n<33, 음수넣지마"></input>
            </p>
            <p><input type="submit" value="이 기능은 유료이며 돈은 제가 내니 안심하십시오." /></p>
        </form >

    )
}




