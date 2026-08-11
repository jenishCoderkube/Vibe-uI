import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 },
      )
    }

    console.log('[Contact API] Received contact submission:')
    console.log(`- From: ${name} <${email}>`)
    console.log(`- Subject: ${subject || 'No Subject'}`)
    console.log(`- Message: ${message}`)

    const resendApiKey = process.env.RESEND_API_KEY
    const targetEmail =
      process.env.CONTACT_RECEIVER_EMAIL || 'jenish.coderkube@gmail.com'

    if (resendApiKey) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'Vibe UI Contact <onboarding@resend.dev>',
            to: [targetEmail],
            replyTo: email,
            subject: `[Vibe UI Contact] ${subject || 'New Inquiry'}`,
            html: `
              <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h2>New Contact Message from Vibe UI</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Reply-To Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; rounded: 8px;">${message}</p>
              </div>
            `,
          }),
        })

        const resData = await res.json()

        if (!res.ok) {
          console.error('[Contact API] Resend error response:', resData)
          return NextResponse.json(
            { error: resData.message || 'Resend failed to deliver email.' },
            { status: 400 },
          )
        }

        console.log(
          '[Contact API] Resend email delivered successfully:',
          resData,
        )
      } catch (emailErr: any) {
        console.error('[Contact API] Resend request exception:', emailErr)
        return NextResponse.json(
          {
            error:
              emailErr.message ||
              'Network error while contacting email service.',
          },
          { status: 500 },
        )
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message delivered successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('[Contact API] Internal Error:', error)
    return NextResponse.json(
      { error: 'Internal server error processing contact submission.' },
      { status: 500 },
    )
  }
}
