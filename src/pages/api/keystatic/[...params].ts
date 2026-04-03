import { makeHandler } from '@keystatic/astro/api'
import keystaticConfig from '../../../../keystatic.config'

export const prerender = false

const handler = makeHandler({
  config: keystaticConfig,
  clientId: import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
  secret: import.meta.env.KEYSTATIC_SECRET,
})
export const ALL = handler
