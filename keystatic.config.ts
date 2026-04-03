import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'kenandotfyi/kenanfyi-v3',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        publishedAt: fields.date({ label: 'Published' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    notes: collection({
      label: 'Notes',
      slugField: 'title',
      path: 'src/content/notes/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedAt: fields.datetime({ label: 'Published' }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
})
