
import { readRange } from "./db"
import { Read2 } from "./db";
export default async function read() {
  let document;

  if (typeof document !== "undefined") {
    document.read.Read2()
  }


  return (<form name="read" action={Read2}>
    <input type="range" id="body" name="body" min="0" max={await readRange()} />
    <input type="submit"></input>
    <>{Read2}</>
  </form>
  )


}
