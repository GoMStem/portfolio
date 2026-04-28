import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = {
  title: '블로그 | 김초은',
  description: '개발 여정을 기록하는 공간입니다.',
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="blog-wrap">
      <div className="page-header fade-up">
        <Link href="/" className="back-btn">
          <i className="fa-solid fa-arrow-left" /> 돌아가기
        </Link>
        <span className="sec-label">Blog</span>
        <h1 className="sec-title page-title">블로그</h1>
        <div className="sec-divider" />
      </div>

      {posts.length === 0 ? (
        <div className="blog-empty fade-up">
          <span className="e">✍️</span>
          <div className="blog-empty-title">아직 작성된 글이 없습니다</div>
          <p className="blog-empty-desc">
            곧 배움과 경험을 담은 글로 채워나갈 예정입니다.<br />
            조금만 기다려 주세요.
          </p>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`blog-card fade-up d${Math.min(i + 1, 5)}`}
            >
              <div className="blog-card-date">{formatDate(post.date)}</div>
              <div className="blog-card-title">{post.title}</div>
              {(post.preview || post.description) && (
                <p className="blog-card-desc">{post.preview || post.description}</p>
              )}
              {post.tags.length > 0 && (
                <div className="blog-card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
