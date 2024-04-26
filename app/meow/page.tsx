window.AudioContext = window.AudioContext || window.webkitAudioContext
import { ElevenLabsClient } from "elevenlabs";
import * as dotenv from "dotenv";
import { select } from "./select";
import pool from "../lib/db";
export default async function meow() {


    dotenv.config();

    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

    if (!ELEVENLABS_API_KEY) {
        throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
    }

    const client = new ElevenLabsClient({
        apiKey: ELEVENLABS_API_KEY,
    });

    const createAudioStreamFromText = async (
        text: string
    ): Promise<Buffer> => {
        const audioStream = await client.generate({
            voice: "Rachel",
            model_id: "eleven_turbo_v2",
            text,
        });

        const chunks: Buffer[] = [];
        for await (const chunk of audioStream) {
            chunks.push(chunk);
        }

        const content = Buffer.concat(chunks);
        return content;

    };

    /************************************************************* *
    try {
        const sql = 'INSERT INTO nya (body) VALUES (?)';
        const result = await pool.query(sql, [await createAudioStreamFromText(await select())]);
        console.log(result);

    } catch (err) {
        console.log(err);
    }

    const stream = require('stream');
    const Speaker = require('speaker');

    let speaker = new Speaker();

    function playAudioFromBuffer(fileContents: any) {
        let bufferStream = new stream.PassThrough();
        bufferStream.end(fileContents);
        bufferStream.pipe(speaker);

       
    }
******************************************************************** */
    //const arrayBufferToAudioBuffer = require('arraybuffer-to-audiobuffer')
    const audioCtx = new AudioContext()
    let ac = await createAudioStreamFromText(await select())
    //let buffer = arrayBufferToAudioBuffer(ac, audioCtx)
    //let audioSource = audioCtx.createBufferSource()
    //audioSource.buffer = buffer
    const audioBuffer = await audioCtx.decodeAudioData(ac);
    //const audioElement = document.querySelector("audio");
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start();

    return (source.start())


}