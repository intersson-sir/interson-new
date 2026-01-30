import { useState } from 'react'
import Button from '@shared/ui/Button/Button'
import Input from '@shared/ui/Input/Input'
import './Form.css'

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
  }

  return (
    <section className="contact-form">
      <div className="contact-form__container">
        <div className="contact-form__content">
          <h2 className="contact-form__title">Обсудить проект</h2>
          <p className="contact-form__subtitle">
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </p>

          <form className="contact-form__form" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              className="contact-form__textarea"
              name="message"
              placeholder="Расскажите о проекте"
              value={formData.message}
              onChange={handleChange}
              rows={6}
            />
            <Button type="submit" variant="gradient" size="large">
              Отправить
            </Button>
          </form>
        </div>

        <div className="contact-form__manager">
          <div className="contact-form__manager-content">
            <h3 className="contact-form__manager-title">
              <span className="contact-form__arrow">→</span>
              <br />
              Обсудить проект
            </h3>
            <div className="contact-form__manager-info">
              <div className="contact-form__manager-avatar"></div>
              <div>
                <p className="contact-form__manager-name">Мария Молоткова</p>
                <p className="contact-form__manager-role">Проджект менеджер</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
