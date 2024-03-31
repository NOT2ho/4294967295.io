'use client'

import { formSubmit } from '../create/formSubmit'
import { revalidatePath } from "next/cache"


export default function Create() {


    return (
        <form action={formSubmit} >
            <p>
                <textarea name="body" placeholder="여기."></textarea>
            </p>
            <p><input type="submit" value="ㄱㄱ" /></p>
        </form>

    )
}




