'use client'
import React from 'react'
import { FormSubmit } from './formSubmit'

export default function Create() {


    return (
        <form action={FormSubmit} >
            <p>
                <textarea name="int" placeholder="int, n<33"></textarea>
            </p>
            <p><input type="submit" value="이 기능은 유료이며 돈은 제가 내니 안심하십시오." /></p>
        </form >

    )
}




