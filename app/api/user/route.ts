import { getUsers } from '@/Shared/service/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const users = await getUsers()
    return NextResponse.json({ users })
}
