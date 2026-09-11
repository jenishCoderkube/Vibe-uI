import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Vibe UI'
    const category = searchParams.get('category') || 'Component Library'
    const desc =
      searchParams.get('desc') ||
      'The modern React & Next.js component library built on Radix UI and Tailwind CSS v4.'

    const categoryFormatted =
      category.charAt(0).toUpperCase() + category.slice(1)

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#09090b',
            padding: '64px 80px',
            position: 'relative',
            color: '#fafafa',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Ambient Glows */}
          <div
            style={{
              position: 'absolute',
              top: '-150px',
              right: '-100px',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-120px',
              left: '-80px',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
            }}
          />

          {/* Header Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              zIndex: 10,
            }}
          >
            {/* Logo + Brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '24px',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                }}
              >
                V
              </div>
              <span
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  color: '#ffffff',
                }}
              >
                Vibe UI
              </span>
            </div>

            {/* Category Pill */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '16px',
                fontWeight: 600,
                color: '#c084fc',
              }}
            >
              <span>{categoryFormatted}</span>
            </div>
          </div>

          {/* Main Title & Description */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '950px',
              zIndex: 10,
            }}
          >
            <h1
              style={{
                fontSize: title.length > 25 ? '54px' : '72px',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                margin: 0,
                backgroundImage:
                  'linear-gradient(180deg, #ffffff 40%, #a1a1aa 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '24px',
                lineHeight: 1.45,
                color: '#a1a1aa',
                margin: 0,
                maxWidth: '850px',
              }}
            >
              {desc}
            </p>
          </div>

          {/* Footer Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              zIndex: 10,
            }}
          >
            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#c084fc',
                }}
              >
                92+ Components & Blocks
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#d4d4d8',
                }}
              >
                Tailwind CSS v4
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#d4d4d8',
                }}
              >
                Radix UI
              </div>
            </div>

            {/* URL */}
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#71717a',
              }}
            >
              vibe-ui-kit.vercel.app
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    return new Response(`Failed to generate the image: ${e.message}`, {
      status: 500,
    })
  }
}
