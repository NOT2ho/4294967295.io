"use client"
import React from 'react'
import { useState } from 'react'
//import FormSubmit from './FormSubmit'
import { useFormStatus } from 'react-dom'


export default function CatMeow() {
    let stt = ["야", "왜", "웨", "와", "애", "이"]
    let end = ["옹", "웅", "용"]
    let mid = ["오", "우", "요", "으", "유", "아", "이", "애", "얘", "에"]

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

    console.log(stt[getRandomInt()])
    console.log(mid[getRandomInt2()])
    console.log(end[getRandomInt3()])


    const { pending, data } = useFormStatus()
    const [val, setVal] = React.useState("");
    const [val2, setVal2] = React.useState("");
    const [hide, setHide] = React.useState(false);
    const [i, setI] = React.useState(0);

    const FormSubmit = (formData: FormData) => {

        const i = Number(formData.get('int'))


        let str = stt[getRandomInt()]
        for (let j = 0; j < i; j++) {
            str = str + mid[getRandomInt2()]
        }
        str = str + end[getRandomInt3()]

        let strEng = sttEng[getRandomInt()]
        for (let j = 0; j < i; j++) {
            str = str + midEng[getRandomInt2()]
        }
        str = str + endEng[getRandomInt3()]



        setVal(str)
        setVal2(strEng)
        setHide(true)
        increseI()
    }
    /*
    const options = {
        method: 'POST',
        headers: {
            'xi-api-key': 'b44e91fb0eabbeb947f70ed906fa11e9',
            'Content-Type': 'application/json'
        },
        body: `{"text":${val2},"model_id":"Turbo v2","voice_settings":{"stability":1,"similarity_boost":1,"style":2,"use_speaker_boost":true}}`
    };

    fetch('https://api.elevenlabs.io/v1/text-to-speech/Xb7hH8MSUJpSbSDYk0k2?output_format=mp3_44100_32', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    */
    const increseI = () => {
        const voiceId = "Xb7hH8MSUJpSbSDYk0k2"; // replace with your voice_id
        const model = 'eleven_turbo_v2';
        const wsUrl = `wss://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream-input?model_id=${model}`;
        const socket = new WebSocket(wsUrl);

        // 2. Initialize the connection by sending the BOS message
        socket.onopen = function (event) {
            const bosMessage = {
                "text": " ",
                "voice_settings": {
                    "stability": 0.5,
                    "similarity_boost": 0.8
                },
                "xi_api_key": "b44e91fb0eabbeb947f70ed906fa11e9", // replace with your API key
            };

            socket.send(JSON.stringify(bosMessage));

            // 3. Send the input text message ("Hello World")
            const textMessage = {
                "text": `${val2}`,
                "try_trigger_generation": false,
            };

            socket.send(JSON.stringify(textMessage));

            // 4. Send the EOS message with an empty string
            const eosMessage = {
                "text": ""
            };

            socket.send(JSON.stringify(eosMessage));
        };

        // 5. Handle server responses
        socket.onmessage = function (event) {
            const response = JSON.parse(event.data);

            console.log("Server response:", response);

            if (response.audio) {
                // decode and handle the audio data (e.g., play it)
                const audioChunk = atob(response.audio);  // decode base64
                console.log("Received audio chunk");
            } else {
                console.log("No audio data in the response");
            }

            if (response.isFinal) {
                // the generation is complete
            }

            if (response.normalizedAlignment) {
                // use the alignment info if needed
            }
        };

        // Handle errors
        socket.onerror = function (error) {
            console.error(`WebSocket Error: ${error}`);
        };

        // Handle socket closing
        socket.onclose = function (event) {
            if (event.wasClean) {
                console.info(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            } else {
                console.warn('Connection died');
            }
        };



    }



    return (
        <form action={FormSubmit}  >
            <p>
                <textarea name="int" placeholder="int"></textarea>
            </p>
            <p><input type="submit" value="긴 울음소리 만들면 고양이가 아파합니다." disabled={pending} />
            </p>{hide ? <p>{val}</p> : <p></p>}
        </form >
    )




}