import { select } from "../meowServer/select"
export default async function meow() {
    const mySynth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(await select());
    mySynth.speak(utterance);
}