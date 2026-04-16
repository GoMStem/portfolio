import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))

  return fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? String(data.date) : '',
        description: data.description ?? '',
        tags: data.tags ?? [],
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

export function getPostBySlug(slug) {
  // params.slug may arrive percent-encoded (e.g. Korean filenames); decode then normalize
  const normalizedSlug = decodeURIComponent(slug).normalize('NFC')
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
  const matched = files.find(f => f.replace(/\.md$/, '').normalize('NFC') === normalizedSlug)
  if (!matched) throw new Error(`Post not found: ${slug}`)
  const fullPath = path.join(postsDirectory, matched)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const htmlContent = String(marked.parse(content))

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date) : '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    htmlContent,
  }
}
