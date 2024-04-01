import { getUsers } from '@/Shared/service/users'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    const users = await getUsers()
    return NextResponse.json({ users })
}
