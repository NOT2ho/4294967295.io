"use server"
import { redirect } from "next/navigation"
import meow from "../meow/page"

export default async function midMeow(num: number) {
    const ac = await meow()

    return ac
}
export async function exportMeow() {
    const awaitMidMeow = await midMeow(0)
    return awaitMidMeow
}
redirect('./meowClient')