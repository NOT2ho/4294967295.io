export default async function handler(
    req,
    res
) {
    let sttEng = ["ya", "ywe", "yweo", "wa", "ae", "i", "mi"]
    let endEng = ["ong", "ung", "yong"]
    let midEng = ["o", "u", "yo", "eu", "yu", "a", "i", "ae", "yea", "e"]

    const Random = async (num) => {
        const i = Number(num)


        const getRandomInt = (Max) => {
            return Math.floor(+Math.random() * +Max)
        }

        let strEng = sttEng[getRandomInt(sttEng.length - 1)]
        if (i < 30) {


            for (let j = 0; j < i; j++) {
                strEng = strEng + midEng[getRandomInt(midEng.length - 1)]
            }
            strEng = strEng + endEng[getRandomInt(endEng.length - 1)]

        }
        else
            strEng = "Keun su an dwoe"

        return strEng;
    }


    const id = await Random(Number(data))


    async function fetch11(string) {

        const options = {
            method: 'POST',
            headers: {
                'xi-api-key': process.env.ELEVENLABS_API_KEY,
                'Content-Type': 'application/json'
            },
            body: '{"text":' + await Random(Number(data)) + ',"model_id":"eleven_monolingual_v1","voice_settings":{"stability":1,"similarity_boost":1,"style":1,"use_speaker_boost":true}}'
        }
        fetch('https://api.elevenlabs.io/v1/text-to-speech/Xb7hH8MSUJpSbSDYk0k2?output_format=mp3_22050_32', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }

    console.log(await fetch11(id))
    const data = fetch11(id)
    res.status(200).json(data)
};
