'use client'
import { useQuery } from '@tanstack/react-query'
import { getSession } from '../service/auth'

export function useGetSession() {
    return useQuery({
        queryFn: async () => getSession(),
        queryKey: ['session']
    })
}
