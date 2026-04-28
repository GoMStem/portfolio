import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/posts'

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }) {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: `${post.title} | 김초은`,
      description: post.description,
    }
  } catch {
    return { title: '포스트를 찾을 수 없습니다 | 김초은' }
  }
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PostPage({ params }) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const currentSlug = decodeURIComponent(params.slug).normalize('NFC')
  const allPosts = getAllPosts()

  return (
    <div className="post-wrap">
      <div className="post-header fade-up">
        <Link href="/blog" className="back-btn">
          <i className="fa-solid fa-arrow-left" /> 블로그로
        </Link>
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          {post.date && <span className="post-date">{formatDate(post.date)}</span>}
          {post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className="post-divider" />
      </div>

      <div
        className="post-content fade-up d1"
        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
      />

      {allPosts.length > 0 && (
        <div className="post-other fade-up">
          <p className="post-other-heading">글 목록</p>
          <ul className="post-other-list">
            {allPosts.map(p => {
              const isCurrent = p.slug.normalize('NFC') === currentSlug
              return (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className={`post-other-link${isCurrent ? ' post-other-link--current' : ''}`}>
                    <span className="post-other-title">{p.title}</span>
                    {p.date && <span className="post-other-date">{formatDate(p.date)}</span>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div style={{ maxWidth: '760px', margin: '2rem auto 0' }}>
        <Link href="/blog" className="back-btn">
          <i className="fa-solid fa-arrow-left" /> 블로그로
        </Link>
      </div>
    </div>
  )
}
