import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, code } = await req.json()

    // Send verification request to your backend
    const response = await fetch('YOUR_BACKEND_URL/verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, code }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Verification failed')
    }

    return NextResponse.json({ message: 'Email verified successfully' })
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Verification failed' },
      { status: 400 }
    )
  }
}

