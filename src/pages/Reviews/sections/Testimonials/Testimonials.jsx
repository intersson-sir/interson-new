import Card from '@shared/ui/Card/Card'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      author: 'Andrey Andersson',
      role: 'CEO INTERSSON',
      text: 'Мы применяем гибкие методы разработки, подстраиваясь под желания и бюджет заказчика.',
      avatar: '',
    },
    {
      id: 2,
      author: 'Maria Molotkova',
      role: 'CEO Company X',
      text: 'Отличная команда, профессиональный подход. Проект был выполнен в срок и с высоким качеством.',
      avatar: '',
    },
    {
      id: 3,
      author: 'Alex Petrov',
      role: 'CTO StartupY',
      text: 'Interson помог нам запустить MVP за 2 месяца. Очень рекомендую!',
      avatar: '',
    },
  ]

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Что говорят клиенты</h2>
        <div className="testimonials__grid">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} variant="bordered" className="testimonials__card">
              <div className="testimonials__quote">"</div>
              <p className="testimonials__text">{testimonial.text}</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar"></div>
                <div className="testimonials__info">
                  <p className="testimonials__name">{testimonial.author}</p>
                  <p className="testimonials__role">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
