import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, email, password } = body

    // Here, you would typically send this data to your backend
    // For now, we'll just log it and return a success response
    console.log('Signup data:', { fullName, email, password })

    return NextResponse.json({ message: 'Signup successful' }, { status: 200 })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ message: 'Signup failed' }, { status: 500 })
  }
}

