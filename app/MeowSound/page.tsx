"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import { FormEvent } from 'react'

export default function MeowSound() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('https://4294967295.io/meow', {
            method: 'POST',
            body: formData,
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
    )

}