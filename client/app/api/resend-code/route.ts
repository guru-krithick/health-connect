import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Send resend code request to your backend
    const response = await fetch('YOUR_BACKEND_URL/resend-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to resend code')
    }

    return NextResponse.json({ message: 'Verification code resent successfully' })
  } catch (error) {
    console.error('Resend code error:', error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Failed to resend code' },
      { status: 400 }
    )
  }
}

