
import { ElevenLabsClient } from "elevenlabs";
import * as dotenv from "dotenv";
import { select } from "./select";


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
        voice: "Alice",
        model_id: "eleven_monolingual_v1",
        text,
    });

    const chunks: Buffer[] = [];
    for await (const chunk of audioStream) {
        chunks.push(chunk);
    }

    const content = Buffer.concat(chunks);
    return content;
};

export default async function meow() {
    console.log(await select())
    await createAudioStreamFromText(await select())
}
