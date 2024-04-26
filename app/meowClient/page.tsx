"use client"
import { startTransition } from 'react';
import meowServer from '../meowServer/page';


export default function MeowClient() {
    return (
        async () => {
            const audioCtx = new AudioContext()
            const audioBuffer = await audioCtx.decodeAudioData(await meowServer(0));
            const source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioCtx.destination);
            source.start()

        })
}

