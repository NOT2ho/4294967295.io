"use client"
import { useState, useEffect } from "react";
export default function Sound(val: string) {


    const audio = new Audio("/Mimi/meow.mp3")
    audio.autoplay = true
    setTimeout(() => { audio.play }, 2000)

    ////    audio.autoplay = true;
    // audio.play();
}