import { serve } from 'https://deno.land/std@0.217.0/http/server.ts'

serve(
  async (req) => {
    try {
      const url = new URL(req.url)
      const targetUrl = url.searchParams.get('url')

      if (!targetUrl) {
        return new Response('Missing URL', { status: 400 })
      }

      // Fetch the actual content from the target URL
      const response = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', // Spoof browser
        },
      })

      // Clone headers but remove security policies blocking embedding
      const headers = new Headers(response.headers)
      headers.delete('x-frame-options')
      headers.delete('content-security-policy')

      const contentType = headers.get('Content-Type') || ''

      // If content is HTML, we need to rewrite relative links
      if (contentType.includes('text/html')) {
        let htmlText = await response.text()
        const origin = new URL(targetUrl).origin

        // Rewrite relative URLs in href, src, action, etc. to go through our proxy
        htmlText = htmlText.replace(/(href|action)="(?!http(?:s)?:\/\/)([^"]+)"/g, (match, attr, path) => {
          // If the path is already proxied, no need to rewrite
          if (path.startsWith('/?url=')) return match

          // Rewrite the relative path to be under our proxy server
          const absoluteUrl = `${origin}/${path}`
          return `${attr}="?url=${encodeURIComponent(absoluteUrl)}"`
        })

        return new Response(htmlText, {
          status: response.status,
          headers,
        })
      }

      // For non-HTML content, just return the content as is
      return new Response(response.body, {
        status: response.status,
        headers,
      })
    } catch (error) {
      console.error('Proxy error:', error)
      return new Response('Proxy failed', { status: 500 })
    }
  },
  { port: 8080 },
)
