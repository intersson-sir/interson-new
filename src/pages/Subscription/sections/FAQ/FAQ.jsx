import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Как работает подписка?',
      answer:
        'Вы платите ежемесячную плату и получаете полный доступ к сайту. В любой момент можете выкупить сайт полностью.',
    },
    {
      question: 'Что входит в обслуживание?',
      answer: 'Хостинг, обновления контента, техническая поддержка, SSL сертификат и резервное копирование.',
    },
    {
      question: 'Могу ли я отменить подписку?',
      answer: 'Да, вы можете отменить подписку в любой момент. Сайт будет работать до конца оплаченного периода.',
    },
    {
      question: 'Как выкупить сайт полностью?',
      answer:
        'Просто свяжитесь с нами, и мы оформим выкуп. Вы получите полные права на сайт и исходный код.',
    },
  ]

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">Часто задаваемые вопросы</h2>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${activeIndex === index ? 'faq__item--active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq__question">
                <h3>{faq.question}</h3>
                <span className="faq__icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && <p className="faq__answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
