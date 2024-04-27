"use client"

import { select } from "../meowServer/select"
import { useEffect } from "react";
export default async function meow() {
    const utterance = new SpeechSynthesisUtterance(await select());

    function MeowClient() {
        useEffect(() => {
            const mySynth = window.speechSynthesis;

            mySynth.speak(utterance)

        })

    }
    MeowClient()
}