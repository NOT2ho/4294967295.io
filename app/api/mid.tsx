import type { NextApiRequest, NextApiResponse } from 'next'

export default async function mid(
    req: NextApiRequest,
    res: NextApiResponse) {


    async function fetchNya() {
        const res = await fetch('https://4294967295.io/api/nya')

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }

    async function fetch11(string: string) {

        const options = {
            method: 'POST',
            headers: {
                'xi-api-key': '3edf7e82eb4ca160a0ddbc9d2f18ca53',
                'Content-Type': 'application/json'
            },
            body: '{"text":' + await fetchNya() + ',"model_id":"eleven_monolingual_v1","voice_settings":{"stability":1,"similarity_boost":1,"style":1,"use_speaker_boost":true}}'
        }
        fetch('https://api.elevenlabs.io/v1/text-to-speech/Xb7hH8MSUJpSbSDYk0k2?output_format=mp3_22050_32', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }

    console.log(await fetchNya)
    const data = fetch11(await fetchNya())
    res.status(200).json(data)
    return <></>
};
