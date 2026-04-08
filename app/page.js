import ContactForm from '@/components/ContactForm'
import ScrollInit from '@/components/ScrollInit'

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
          <div className="hero-role fade-up d2">Junior Developer</div>
          <h1 className="hero-headline fade-up d3">
            코드를 넘어,<br />
            <em>처음부터 끝까지.</em>
          </h1>
          <p className="hero-sub fade-up d4">
            기획, 개발, 배포까지 — 프로그램의 모든 단계를 책임지는<br />
            올라운더 개발자를 향해 성장 중입니다.
          </p>
          <div className="hero-cta fade-up d5">
            <a
              href="https://github.com/choeun0524"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="fab fa-github" /> GitHub 보러가기
            </a>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects">
        <div className="inner">
          <div className="fade-up">
            <span className="sec-label">Projects</span>
            <p className="sec-sub">작지만 직접 만들었습니다</p>
            <h2 className="sec-title">프로젝트</h2>
            <div className="sec-divider" />
          </div>
          <div className="proj-grid">
            <div className="proj-card fade-up d1">
              <div className="proj-banner b1">📋</div>
              <div className="proj-body">
                <div className="proj-name">Notion 학원 관리 페이지</div>
                <p className="proj-desc">
                  수업 일정, 학생과 학부모님 관리, 과제 트래킹까지 — 학원 운영에 필요한 모든 것을 하나의 Notion 페이지로 정리합니다.
                  기능 구현에 그치지 않고, 실제로 쓰는 사람의 입장에서 생각하고 만듭니다.
                  복잡한 정보를 한눈에 파악할 수 있도록 구조화된 템플릿을 직접 설계합니다.
                </p>
                <div className="proj-tags">
                  <span className="tag">Notion</span>
                  <span className="tag">문서설계</span>
                  <span className="tag">템플릿</span>
                </div>
              </div>
            </div>
            <div className="proj-card fade-up d2">
              <div className="proj-banner b2">🌐</div>
              <div className="proj-body">
                <div className="proj-name">WordPress 홈페이지 제작</div>
                <p className="proj-desc">
                  디자인 툴에 의존하지 않고, 코드를 직접 작성해 완성도 높은 홈페이지를 구현합니다.
                  WordPress 환경에서 HTML/CSS/JS를 활용한 커스텀 개발로 클라이언트의 니즈에 맞는
                  웹사이트를 처음부터 끝까지 제작할 수 있습니다.
                </p>
                <div className="proj-tags">
                  <span className="tag">WordPress</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="proj-card cs fade-up d3">
              <div className="cs-body">
                <span className="e">🚀</span>
                <p>더 많은 프로젝트를<br />준비 중입니다</p>
              </div>
            </div>
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
      <ScrollInit />
    </main>
  )
}
