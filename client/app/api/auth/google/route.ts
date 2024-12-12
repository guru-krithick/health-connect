import { NextResponse } from 'next/server'

export async function POST() {
  try {
    // Replace with your Google OAuth configuration
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
    const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`

    return NextResponse.json({ url: googleAuthUrl })
  } catch (error) {
    console.error('Google auth error:', error)
    return NextResponse.json(
      { message: 'Failed to initialize Google login' },
      { status: 500 }
    )
  }
}

