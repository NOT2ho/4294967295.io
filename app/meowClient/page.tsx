"use client"
import { startTransition } from 'react';
import meowServer from '../meowServer/notPage';
import { useState, useEffect, useRef } from 'react';

function MeowMeow() {
    //  const myRef = useRef<HTMLAudioElement>(null);
    const [src, setSrc] = useState<AudioBufferSourceNode>()

    useEffect(() => {
        (async () => {
            const meowServered = await meowServer(0)
            const audioCtx = new AudioContext()
            const audioBuffer = await audioCtx.decodeAudioData(meowServered);
            const source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioCtx.destination);
            setSrc(source)
            //source.start()

            //myRef.current

            /*return () => {
                source.stop
            }*/

        })()
    }, [src])

    return (<>
        {src?.start()}
        <button onClick={MeowMeow}>왜웅</button>
    </>)
}

export default function MeowClient() {

    return (
        <MeowMeow></MeowMeow>
    )
}

