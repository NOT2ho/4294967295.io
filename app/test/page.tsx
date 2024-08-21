import {Pos} from 'notpos_kr'

export default function page() {
    
    let pos = new Pos();
    let 야옹 = pos.tag("징그럽다 짐승이 야옹야옹 고양이")
    console.log(야옹)
    return (<>{야옹}</>)
}