// src/content.config.ts  ← note: filename changed too in v5
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
})

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
  }),
})

export const collections = { posts, notes }
