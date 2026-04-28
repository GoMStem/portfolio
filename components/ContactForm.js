'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const f = e.target
    if (!f.fname.value.trim() || !f.femail.value.trim() || !f.fmsg.value.trim()) return
    setLoading(true)
    setTimeout(() => {
      f.reset()
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 4500)
    }, 900)
  }

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate>
      <div className="fg">
        <label htmlFor="fname">이름</label>
        <input type="text" id="fname" name="fname" placeholder="홍길동" required />
      </div>
      <div className="fg">
        <label htmlFor="femail">이메일</label>
        <input type="email" id="femail" name="femail" placeholder="your@email.com" required />
      </div>
      <div className="fg">
        <label htmlFor="fmsg">메시지</label>
        <textarea id="fmsg" name="fmsg" placeholder="안녕하세요! 협업 제안 드리고 싶어서 연락드립니다." required />
      </div>
      <button type="submit" className="btn-send" disabled style={{ cursor: 'default', opacity: 0.5 }}>
        <span>메시지 보내기</span> <i className="fa-solid fa-paper-plane" />
      </button>
      {sent && (
        <div className="f-success show">
          <i className="fa-solid fa-circle-check" />
          메시지가 전송되었습니다 ✓
        </div>
      )}
    </form>
  )
}
