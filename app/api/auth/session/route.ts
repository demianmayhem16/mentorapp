import { getUserSession } from '@/lib/session'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const session = await getUserSession()

    return NextResponse.json(session?.session)
}
