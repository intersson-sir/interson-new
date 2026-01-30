import './Info.css'

function Info() {
  return (
    <section className="contact-info">
      <div className="contact-info__container">
        <div className="contact-info__grid">
          <div className="contact-info__item">
            <h3 className="contact-info__title">Email</h3>
            <a href="mailto:info@interson.ru" className="contact-info__link">
              info@interson.ru
            </a>
          </div>

          <div className="contact-info__item">
            <h3 className="contact-info__title">Телефон</h3>
            <a href="tel:+74951335205" className="contact-info__link">
              +7 495 133-52-05
            </a>
          </div>

          <div className="contact-info__item">
            <h3 className="contact-info__title">Офис в России</h3>
            <p className="contact-info__text">МО, г. Красногорск, ул. Успенская, д. 28</p>
          </div>

          <div className="contact-info__item">
            <h3 className="contact-info__title">Офис в UAE</h3>
            <p className="contact-info__text">
              One Central 8th and 9th Floor, Trade Centre,
              <br />
              Dubai - United Arab Emirates
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
