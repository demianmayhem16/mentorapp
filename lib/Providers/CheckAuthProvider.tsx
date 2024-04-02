'use client'
import { routes } from '@/Shared/const'
import {  useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


type Props = {
    children?: React.ReactNode
}

export const CheckAuthProvider = ({ children }: Props) => {
    const router = useRouter()
    const session = useSession()


    useEffect(() => {
        if (session.status !== 'authenticated' && session.status !== 'loading') {
            router.push(routes.login)
        }

        if (session.status === 'authenticated') {
            router.push(routes.dashboard)
        }
      }, [session.status])

    return <>{children}</>
}
