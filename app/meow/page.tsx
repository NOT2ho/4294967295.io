"use client"
import { ElevenLabsClient } from "elevenlabs";
import * as dotenv from "dotenv";
import { select } from "./select";

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



    await createAudioStreamFromText(await select())

}







/************************************************
import { ElevenLabsClient } from "elevenlabs";
import * as dotenv from "dotenv";
import { select } from "./select";


dotenv.config();

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

if (!ELEVENLABS_API_KEY) {
    throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
}

export default async function meow() {
    const client = new ElevenLabsClient({
        apiKey: ELEVENLABS_API_KEY,
    });
    const audioStream = await client.generate({
        stream: true,
        voice: "Bella",
        text: await select(),
        model_id: "eleven_multilingual_v2"
    })


    return (<p>
        <body>
            <button data-playing="false" role="switch" aria-checked="false">
                <span>{await select()}</span>
            </button>
            <audio src={await select()}></audio>
        </body></p>
    )
}
**************************************************/