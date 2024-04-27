"use client"

import { select } from "../meowServer/select"
import { useEffect } from "react";
export default function MeowClient() {
    useEffect(() => {
        const meow = async () => {
            const mySynth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(await select());
            mySynth.speak(utterance)
        }
        meow()
    }
    )

}
