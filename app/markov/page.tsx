import { writeFile } from 'fs/promises'
import { join } from 'path'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    'use server'

    const file: File | null = data.get('file') as unknown as File
    if (!file) {
      throw new Error('No file uploaded')
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join('./file/', 'tmp.txt')
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

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
            <form action="/markovCreate" method = "POST">
        <button type="submit" >생성</button>
      </form>
    </main>
  )
}