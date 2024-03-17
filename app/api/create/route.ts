import { createUser, getUser } from '@/Shared/service/users'
import { sql } from '@vercel/postgres'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    try {
        const user = await getUser('demianmayhem1991@gmail.com')
        // const result = await createUser({ name: 'TESTNAME', email: 'test@gmail.com', id: '2' })
        return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}
