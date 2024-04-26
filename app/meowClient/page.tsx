"use client"
import { startTransition } from 'react';
import meowServer from '../meowServer/page';

const audioCtx = new AudioContext()
export default function MeowClient() {

    async () => {
        const audioBuffer = await audioCtx.decodeAudioData(await meowServer(null));
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start()
    }
}

