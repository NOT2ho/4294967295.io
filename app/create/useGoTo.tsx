'use cloe'

import { useRouter } from 'next/navigation'

export default function useGoTo(props: any) {
    const router = useRouter();

    router.refresh()
    router.push('/read2')

}