import { type NextRequest, NextResponse } from 'next/server'

// 新闻
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')

  return NextResponse.json({ query })

  // return Response.json({ query })

  // return new Response('Success!', {
  //     status: 200,
  // })
}
