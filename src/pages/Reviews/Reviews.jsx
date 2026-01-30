import Testimonials from './sections/Testimonials/Testimonials'
import Clients from './sections/Clients/Clients'
import './Reviews.css'

function Reviews() {
  return (
    <div className="reviews">
      <div className="reviews__hero">
        <div className="reviews__hero-container">
          <h1 className="reviews__hero-title">Отзывы</h1>
          <p className="reviews__hero-subtitle">
            Узнайте, что наши клиенты говорят о работе с нами
          </p>
        </div>
      </div>
      <Testimonials />
      <Clients />
    </div>
  )
}

export default Reviews
