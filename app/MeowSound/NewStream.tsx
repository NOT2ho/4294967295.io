"use server"
import { ElevenLabsClient } from "elevenlabs";
export default async function NewStream(formData: FormData) {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY

    if (!ELEVENLABS_API_KEY) {
        throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
    }


    const client = new ElevenLabsClient({
        apiKey: ELEVENLABS_API_KEY,
    });



    let sttEng = ["ya", "ywe", "yweo", "wa", "ae", "i"]
    let endEng = ["ong", "ung", "yong"]
    let midEng = ["o", "u", "yo", "eu", "yu", "a", "i", "ae", "yea", "e"]

    function getRandomInt() {
        return Math.floor(Math.random() * (5 - 0))
    }

    function getRandomInt3() {
        return Math.floor(Math.random() * (2 - 0))
    }
    function getRandomInt2() {
        return Math.floor(Math.random() * (9 - 0))
    }



    const i = Number(formData.get('int'))
    let strEng = sttEng[getRandomInt()]
    if (i < 30) {


        for (let j = 0; j < i; j++) {
            strEng = strEng + midEng[getRandomInt2()]
        }
        strEng = strEng + endEng[getRandomInt3()]

    }
    else
        strEng = "Keun su an doe"


    const NewStream = async (
        text: string
    ): Promise<Buffer> => {
        const audioStream = await client.generate({
            voice: "Rachel",
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

    await NewStream(strEng)

}