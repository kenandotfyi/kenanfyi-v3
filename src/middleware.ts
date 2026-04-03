import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const isOAuthRoute =
    context.url.pathname.includes('/github/oauth/') ||
    context.url.pathname.includes('/github/login')

  if (isOAuthRoute) {
    const forwardedHost = context.request.headers.get('x-forwarded-host')
    const forwardedProto = context.request.headers.get('x-forwarded-proto')

    if (forwardedHost && forwardedProto) {
      const correctedUrl = new URL(context.url)
      correctedUrl.protocol = forwardedProto
      correctedUrl.host = forwardedHost

      context.url.protocol = forwardedProto
      context.url.host = forwardedHost
    }
  }

  return next()
})
