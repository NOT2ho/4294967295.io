'use cloe'

import { useRouter } from 'next/navigation'

export default function useGoTo(props) {
    const router = useRouter();

    router.refresh()
    router.push('/read2')

}