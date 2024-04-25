import { ElevenLabsClient, } from "elevenlabs";
import type { NextApiRequest, NextApiResponse } from 'next'

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY
export default async function endNya() {


    if (!ELEVENLABS_API_KEY) {
        throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
    }

    async function getData() {

        const res = await fetch('https://4294967295.io/api/mid')
        const data = await res.json()
        const nya = JSON.parse(data)
        const notPromiseNya = await nya
        const StringNotPromiseNya = notPromiseNya.toString

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }

        return nya

    }
    const client = new ElevenLabsClient({
        apiKey: ELEVENLABS_API_KEY,
    });

    const createAudioStreamFromText = async (
        text: string
    ): Promise<Buffer> => {
        const audioStream = await client.generate({
            voice: "Alice",
            model_id: "eleven_monolingual_v1",
            text,
        });

        const chunks: Buffer[] = [];
        for await (const chunk of audioStream) {
            chunks.push(chunk);
        }

        const content = Buffer.concat(chunks)

        return content

    };
    await createAudioStreamFromText(await getData())

}