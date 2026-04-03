export const prerender = false

export const GET = async ({ request }: { request: Request }) => {
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  return new Response(JSON.stringify({
    url: request.url,
    headers,
  }, null, 2), {
    headers: { 'content-type': 'application/json' }
  })
}
