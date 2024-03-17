import { User } from '@/lib/schema'
import { getUsers } from '@/queries/users'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse<User[]>) {
    const users = await getUsers()
    return NextResponse.json(users)
}
