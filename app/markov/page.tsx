import { writeFile } from 'fs/promises'


export default async function ServerUploadPage() {
  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const path = '/tmp/tmp.txt'
    await writeFile(path, buffer)

    return { success: true }
  }

  return (
    <main>
      <h1>랜덤 문장 생성기: </h1>
      <h2>*1만 자 이하*의 txt 파일을 업로드하세요. 파일이 충분히 크지 않으면 결과가 잘 안 나옵니다. 하지만 파일이 많이 크면 느립니다.<br></br>파일은 삭제됩니다. </h2>
      <h3>정확히는 덮어씌워집니다.</h3>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
            <form action="/markovCreate">
        <button type="submit" >생성</button>
      </form>
    </main>
  )
}