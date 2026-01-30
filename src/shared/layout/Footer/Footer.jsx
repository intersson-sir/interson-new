import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">INTERSON</div>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                TG
              </a>
              <a href="#" className="footer__social-link">
                @
              </a>
            </div>
          </div>

          <div className="footer__content">
            <div className="footer__column">
              <Link to="/about" className="footer__link">
                О нас
              </Link>
              <Link to="/services" className="footer__link">
                Услуги
              </Link>
              <Link to="/reviews" className="footer__link">
                Проекты
              </Link>
              <Link to="/contact" className="footer__link">
                Контакты
              </Link>
            </div>

            <div className="footer__column">
              <a href="tel:+74951335205" className="footer__link">
                +7 495 133-52-05
              </a>
              <a href="mailto:info@interson.ru" className="footer__link">
                info@interson.ru
              </a>
              <p className="footer__link">МО, г. Красногорск, ул. Успенская, д. 28</p>
              <p className="footer__link">
                One Central 8th and 9th Floor, Trade Centre, Trade Centre 2,
                <br />
                Dubai - United Arab Emirates
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">© 2019 – 2024</div>
          <Link to="/privacy" className="footer__link">
            Политика конфиденциальности
          </Link>
          <Link to="/terms" className="footer__link">
            Условия использования
          </Link>
        </div>

        <div className="footer__legal">
          <span className="footer__link">ООО «Интерсон»</span>
          <span className="footer__link">ИНН 5024238266</span>
          <span className="footer__link">ОГРН 1235000141782</span>
        </div>
      </div>

      <div className="footer__tech">
        <div className="footer__tech-list">
          <span>React</span>
          <span>Vue</span>
          <span>Redux</span>
          <span>Nuxt</span>
          <span>Typescript</span>
          <span>PHP</span>
          <span>Laravel</span>
          <span>Yii2</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
