import type { Content } from 'newt-client-js'
import type { Author } from './author'
import type { Tag } from './tag'

export interface Article {
  title: string
  slug: string
  meta: {
    title: string
    description: string
    ogImage: { src: string } | null
  }
  body: string
  coverImage: { src: string } | null
  author: (Content & Author) | null
  tags: (Content & Tag)[]
}

export type Archive = { year: number; count: number }
