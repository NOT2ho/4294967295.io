'use client'

import { FormSubmit } from '../create/formSubmit'
import useGoTo from './useGoTo'

export default function Create() {


    return (
        <form action={FormSubmit} >
            <p>
                <textarea name="body" placeholder="여기."></textarea>
            </p>
            <p><input type="submit" value="ㄱㄱ" /></p>
        </form >

    )
}




