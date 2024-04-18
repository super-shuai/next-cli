import { NextRequest, NextResponse } from 'next/server'

// 模拟用户登录鉴权
export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')

  if (!token) {
    return new Response('登录失效', {
      status: 401,
    })
  }
  // return Response.json({})

  return NextResponse.json({})
}
