import { writeFile } from 'fs/promises'
import markovCreate from '../markovCreate/page'


export default async function ServerUploadPage() {
  async function upload(formData: FormData) {
    'use server'

   /* const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    */
    let txt : string | undefined = formData.get('content')?.toString()
    let buf = txt ? Buffer.from(txt) : Buffer.from("")
    console.log(txt)
    const path = '/tmp/tmp.txt'
    await writeFile(path, buf)
    console.log('file uploaded')
    return { success: true }
  }
  
  return (
    <main>
      <h1>랜덤 문장 생성기: 느림 </h1>
      <h2>많이 긴 문자열을 입력하세요. 제 형태소 분석기가 아직 많이 느려서 조금 오래 기다리셔야 합니다.<br></br>입력은 삭제됩니다. </h2>
      <h3>정확히는 덮어씌워집니다.</h3>
      <>etri가 저를 차단했습니다. 그래서 느립니다.</>
      <form action={upload}>
        <textarea name="content" placeholder='^ _______ ^' /><br></br>
        <button type="submit">이 버튼을 먼저 누르고 생성 버튼을 누르십시오</button>
    </form>
            <form action={markovCreate}>
        <button type="submit" >생성(누르고 페이지가 넘어갈 때까지 기다리십시오. 엄청나게 오래 걸립니다.)</button>
      </form>
    </main>
  )
}