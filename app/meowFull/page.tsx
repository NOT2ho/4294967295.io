import meowServer from "../meowServer/page"
import MeowClient from "../meowClient/page"

export default function meowFull() {
    meowServer(0)
    MeowClient()

    return (<p></p>)

}