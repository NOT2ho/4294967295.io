"use client"
import meow from "../meow/page";

export default async function meowClient() {

    const audioCtx = new AudioContext()
    let ac = await meow()
    //let buffer = arrayBufferToAudioBuffer(ac, audioCtx)
    //let audioSource = audioCtx.createBufferSource()
    //audioSource.buffer = buffer
    const audioBuffer = await audioCtx.decodeAudioData(ac);
    //const audioElement = document.querySelector("audio");
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start();
}
return (source.start())
