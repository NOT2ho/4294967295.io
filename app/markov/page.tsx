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
    markovCreate()
    return { success: true }
  }

  return (
    <main>
      <h1>랜덤 문장 생성기: </h1>
      <h2>*1만 자 이하*의 텍스트를 업로드하세요. 문자열이 충분히 길지 않으면 결과가 잘 안 나옵니다. 하지만 문자열이 많이 길면 느립니다.<br></br>입력은 삭제됩니다. </h2>
      <h3>정확히는 덮어씌워집니다.</h3>
      <form action={upload}>
        <textarea name="content" placeholder='^ _______ ^' /><br></br>
        <button type="submit">생성(누르고 좀 기다려야 합니다)</button>
      </form>
    </main>
  )
}