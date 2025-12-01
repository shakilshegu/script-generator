import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch(
      'http://content-automation-alb-451510707.us-east-1.elb.amazonaws.com/api/v1/topics',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Topics API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch topics' },
      { status: 500 }
    )
  }
}
