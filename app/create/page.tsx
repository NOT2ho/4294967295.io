'use client'
import React from 'react'
import { FormSubmit } from '../create/formSubmit'

export default function Create() {


    return (
        <form action={FormSubmit} >
            <p>
                <textarea name="body" placeholder="입력한 것은 제 자연어처리 데이터셋으로 쓰일 수도 있습니다."></textarea>
            </p>
            <p><input type="submit" value="ㄱㄱ" /></p>
        </form >

    )
}




