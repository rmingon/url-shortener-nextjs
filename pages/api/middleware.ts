import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/profile')) {
    console.log('onProfile')
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
}
