import ContactForm from '@/components/ContactForm'

const WORKS = [
  {
    name: '연세호쌤',
    host: 'www.yonsei-hossam.com',
    url: 'https://www.yonsei-hossam.com/',
    category: 'Education · 수능 논술 코칭',
    features: [
      { icon: 'fa-arrows-rotate', label: '네이버 블로그 자동 연동' },
      { icon: 'fa-magnifying-glass', label: 'SEO 자동화' },
    ],
    tags: ['Next.js', 'React', 'Vercel'],
  },
  {
    name: 'Hello Readers',
    host: 'helloreaders.co.nz',
    url: 'https://helloreaders.co.nz/',
    category: 'Education · 영어·수학 학원 (NZ)',
    features: [
      { icon: 'fa-magnifying-glass', label: 'SEO 최적화' },
    ],
    tags: ['Next.js', 'React', 'Vercel'],
  },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section id="hero">
        <div className="inner hero-content">
          <div className="hero-badge fade-up">
            <span className="hero-badge-dot" />
            Junior Developer
          </div>
          <div className="hero-name fade-up d1">김초은</div>
          <div className="hero-role fade-up d2">Cho Eun Kim</div>
          <h1 className="hero-headline fade-up d3">
            코드를 넘어,<br />
            <em>처음부터 끝까지.</em>
          </h1>
          <p className="hero-sub fade-up d4">
            기획, 개발, 배포까지 — 프로그램의 모든 단계를 책임지는<br />
            올라운더 개발자를 향해 성장 중입니다.
          </p>
          <div className="hero-cta fade-up d5">
            <span className="btn btn-primary" style={{ cursor: 'default', opacity: 0.5 }}>
              <i className="fab fa-github" /> GitHub 보러가기
            </span>
            <a href="#contact" className="btn btn-outline">
              연락하기 <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="scroll-hint">
          <span>SCROLL</span>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="inner">
          <div className="fade-up">
            <span className="sec-label">About Me</span>
            <h2 className="sec-title">나는 이런 개발자입니다</h2>
            <div className="sec-divider" />
          </div>
          <div className="about-grid">
            <div className="about-text fade-up d1">
              <p>
                <strong>김초은</strong>입니다. 개발을 시작한 지 얼마 되지 않았지만,
                단순히 기능을 구현하는 것을 넘어 서비스 전체를 이해하고
                기획부터 배포까지 스스로 책임질 수 있는 개발자가 되고자 합니다.
              </p>
              <p>
                아직 경력은 짧지만, 매일 새로운 것을 배우고 기록하며 꾸준히 성장하고 있습니다.
                좋은 코드는 깊은 이해에서 나온다고 믿으며, 문제의 근본을 파악하는 습관을 기르고 있습니다.
              </p>
              <p>
                코드만 잘 짜는 개발자가 아닌, 팀과 함께 서비스를 만들어 나갈 수 있는
                <strong>올라운더 개발자</strong>가 되는 것이 목표입니다.
              </p>
            </div>
            <div className="strength-cards">
              <div className="card fade-up d2">
                <div className="card-icon">🔍</div>
                <div className="card-title">올라운더 지향</div>
                <p className="card-desc">기획 → 설계 → 개발 → 배포, 모든 단계를 이해하고 주도할 수 있는 개발자를 목표로 합니다.</p>
              </div>
              <div className="card fade-up d3">
                <div className="card-icon">🌱</div>
                <div className="card-title">빠른 성장</div>
                <p className="card-desc">매일 배우고 꾸준히 기록합니다. 어제보다 나은 코드를 작성하는 것을 즐깁니다.</p>
              </div>
              <div className="card fade-up d4">
                <div className="card-icon">🤝</div>
                <div className="card-title">커뮤니케이션</div>
                <p className="card-desc">개발자와 비개발자 모두와 원활하게 소통하며 프로젝트를 이끌어갈 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="inner">
          <div className="fade-up">
            <span className="sec-label">Tech Stack</span>
            <p className="sec-sub">배우는 중이지만, 꾸준히 쌓고 있습니다</p>
            <h2 className="sec-title">기술 스택</h2>
            <div className="sec-divider" />
          </div>
          <div className="skill-rows">
            <div className="skill-row fade-up d1">
              <div className="skill-cat">Language</div>
              <div className="pills">
                <span className="pill pill-green">HTML</span>
                <span className="pill pill-green">CSS</span>
                <span className="pill pill-green">JavaScript</span>
                <span className="pill pill-green">Python</span>
              </div>
            </div>
            <div className="skill-row fade-up d2">
              <div className="skill-cat">Tool</div>
              <div className="pills">
                <span className="pill pill-gray">GitHub</span>
                <span className="pill pill-gray">Notion</span>
                <span className="pill pill-gray">n8n</span>
                <span className="pill pill-gray">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="inner">
          <div className="fade-up projects-head">
            <span className="sec-label">Selected Works</span>
            <p className="sec-sub">직접 제작한 실제 라이브 사이트</p>
            <h2 className="sec-title">프로젝트</h2>
            <div className="sec-divider" />
          </div>
          <div className="work-grid">
            {WORKS.map((w, i) => (
              <a
                key={w.host}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card fade-up"
                style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
                aria-label={`${w.name} 방문하기`}
              >
                <div className="work-card-preview">
                  <div className="work-card-chrome">
                    <div className="work-card-dots"><span /><span /><span /></div>
                    <div className="work-card-address">
                      <i className="fa-solid fa-lock" />
                      <span>{w.host}</span>
                    </div>
                  </div>
                  <div className="work-card-shot">
                    <img
                      src={`https://image.thum.io/get/width/900/crop/650/noanimate/${w.url}`}
                      alt={`${w.name} 미리보기`}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="work-card-body">
                  <div className="work-card-top">
                    <span className="work-card-live">
                      <span className="work-card-live-dot" />
                      LIVE
                    </span>
                    <span className="work-card-category">{w.category}</span>
                  </div>
                  <div className="work-card-header">
                    <h3 className="work-card-name">{w.name}</h3>
                    <i className="fa-solid fa-arrow-up-right-from-square work-card-external" />
                  </div>
                  {w.features?.length > 0 && (
                    <div className="work-card-features">
                      {w.features.map(f => (
                        <span key={f.label} className="work-card-feature">
                          <i className={`fa-solid ${f.icon}`} />
                          {f.label}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="work-card-tags">
                    {w.tags.map(t => (
                      <span key={t} className="work-card-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="inner">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="fade-up">
                <span className="sec-label">Contact</span>
                <h2 className="sec-title">연락처</h2>
                <div className="sec-divider" />
              </div>
              <p className="contact-copy fade-up d1">
                같이 만들어 나가고 싶다면,<br />
                편하게 연락주세요.
              </p>
              <div className="contact-items fade-up d2">
                <div className="citem">
                  <i className="fa-solid fa-envelope" />
                  <a href="mailto:choeung551@gmail.com">choeung551@gmail.com</a>
                </div>
                <div className="citem">
                  <i className="fab fa-github" />
                  <a href="https://github.com/choeun0524" target="_blank" rel="noopener noreferrer">
                    github.com/choeun0524
                  </a>
                </div>
              </div>
              <div className="socials fade-up d3">
                <a href="https://github.com/choeun0524" target="_blank" rel="noopener noreferrer" className="slink" aria-label="GitHub">
                  <i className="fab fa-github" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="slink" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="slink" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="fade-up d2">
              <ContactForm />
            </div>
          </div>
          <div className="contact-foot fade-up">
            © {new Date().getFullYear()} 김초은. Crafted with passion.
          </div>
        </div>
      </section>
    </main>
  )
}
