
import { redirect } from "next/navigation"
import meow from "../meow/page"
export default async function midMeow() {
    const ac = await meow()

    return ac
}
redirect('./meowClient')