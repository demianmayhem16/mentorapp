
import { NextResponse } from 'next/server'
import { deleteTempProduct } from '@/Shared/api/modules/temporaryProductTemplate'

export async function GET(request: Request) {
  const a = await deleteTempProduct('tempProduct')
   return NextResponse.json({ a })
}
