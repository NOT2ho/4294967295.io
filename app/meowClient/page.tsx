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

    /***********************************
     * 
     * 

    PlayAudio(audioBuffer, callBack) {
        // Create an AudioBufferSourceNode from the AudioBuffer
        const source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        // Connect the AudioBufferSourceNode to the AudioContext's destination (the speakers)
        source.connect(this.audioContext.destination);
        // Start playing the audio immediately
        source.start(0);

        // Keep a reference to the AudioBufferSourceNode that's currently playing
        this.currentSource = source;

        // Handle the end of the audio
        this.handleAudioEnd(source, callBack);
    }

     */

}

