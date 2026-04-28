import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDirectory = path.join(process.cwd(), 'posts')

function extractPreview(markdown) {
  return markdown
    .replace(/!\[.*?\]\(.*?\)/g, '')   // 이미지 제거
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1') // 링크 → 텍스트만
    .replace(/^#{1,6}\s+/gm, '')        // 헤더 제거
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // 굵은 글씨
    .replace(/(\*|_)(.*?)\1/g, '$2')    // 이탤릭
    .replace(/`{1,3}[^`]*`{1,3}/g, '') // 코드
    .replace(/^[-*_]{3,}\s*$/gm, '')   // 구분선
    .replace(/>\s?/gm, '')             // 인용
    .replace(/\n+/g, ' ')             // 줄바꿈 → 공백
    .replace(/\s+/g, ' ')             // 연속 공백 정리
    .trim()
    .slice(0, 200)
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))

  return fileNames
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(postsDirectory, fileName), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? String(data.date) : '',
        description: data.description ?? '',
        preview: extractPreview(content),
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
