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
            const meowServeredBuf = new Uint8Array(meowServered).buffer;
            const audioBuffer = await audioCtx.decodeAudioData(meowServeredBuf);
            const source = audioCtx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioCtx.destination);
            setSrc(source)
            //source.start()

            //myRef.current

            /*return () => {
                source.stop
            }<button onClick={MeowMeow}>왜웅</button>*/

        })()
    }, [src])

    return (<>
        {src?.start()}

    </>)
}

export default function MeowClient() {

    return (
        <MeowMeow></MeowMeow>
    )
}

