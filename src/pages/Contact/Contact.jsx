import Form from './sections/Form/Form'
import Info from './sections/Info/Info'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <div className="contact__hero">
        <div className="contact__hero-container">
          <h1 className="contact__hero-title">Контакты</h1>
          <p className="contact__hero-subtitle">
            Свяжитесь с нами удобным способом. Мы ответим в течение 24 часов.
          </p>
        </div>
      </div>
      <Form />
      <Info />
    </div>
  )
}

export default Contact
