"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'
import NewStream from './NewStream'



export default function MeowSound() {
    const { pending, data } = useFormStatus()
    const [hide, setHide] = React.useState(false);
    let [meow, setMeow] = React.useState("");
    console.log(meow)

    setMeow = () => { }
    return (
        < form action={NewStream} >
            <p>
                <textarea name="int" placeholder="int"></textarea>
            </p>
            <p><input type="submit" value="큰 숫자 넣지 마세요." disabled={pending} />
            </p><p>음성이 재생되지 않는다면 사용자 문제입니다.(진짜로!)</p>
        </form >
    )

}

