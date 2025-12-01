import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch(
      'https://d150xtu6gm3xvy.cloudfront.net/api/v1/script',
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
    console.error('Script API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to generate script' },
      { status: 500 }
    )
  }
}
