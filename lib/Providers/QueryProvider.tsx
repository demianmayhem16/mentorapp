'use client'

import { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 6 * 1000,
                        refetchInterval: 6 * 1000
                    }
                }
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools /> {children}
        </QueryClientProvider>
    )
}
