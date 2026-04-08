import './globals.css'
import Nav from '@/components/Nav'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: '김초은 | Junior Developer',
  description: '기획부터 배포까지 책임지는 올라운더 개발자를 향해 성장 중입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <Nav />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
