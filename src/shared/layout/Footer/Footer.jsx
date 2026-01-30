import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Content: CTA Card + Footer Info */}
        <div className="footer__main">
          {/* CTA Card */}
          <div className="footer__cta-card">
            <div className="footer__cta-background">
              <div className="footer__cta-overlay" />
              <img
                src="https://www.figma.com/api/mcp/asset/1d87ab26-8e9d-4c03-aa6c-3426125b2a68"
                alt=""
                className="footer__cta-image"
              />
            </div>
            <div className="footer__cta-content">
              <h2 className="footer__cta-title">
                -&gt;
                <br />
                Обсудить проект
              </h2>
              <div className="footer__manager">
                <img
                  src="https://www.figma.com/api/mcp/asset/ea63d548-b49a-46a0-999f-c7cde3459369"
                  alt="Мария Молоткова"
                  className="footer__manager-avatar"
                />
                <div className="footer__manager-info">
                  <p className="footer__manager-name">Мария Молоткова</p>
                  <p className="footer__manager-role">Проджект менеджер</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="footer__info">
            {/* Empty Space */}
            <div className="footer__spacer" />

            {/* Logo & Social */}
            <div className="footer__header">
              <div className="footer__logo">
                <img
                  src="https://www.figma.com/api/mcp/asset/fb48195f-1503-4ac3-badf-cd344678a707"
                  alt=""
                  className="footer__logo-icon"
                />
                <span className="footer__logo-text">INTERSSON</span>
              </div>
              <div className="footer__social">
                <a href="#" className="footer__social-link">
                  TG
                </a>
                <a href="#" className="footer__social-link">
                  @
                </a>
              </div>
            </div>

            {/* Navigation & Contacts */}
            <div className="footer__columns">
              <div className="footer__column">
                <p>О нас</p>
                <p>Услуги</p>
                <p>Проекты</p>
                <p>Контакты</p>
              </div>
              <div className="footer__column footer__column--wide">
                <p>+7 495 133-52-05</p>
                <p>info@softpremier.ru</p>
                <p>МО, г. Красногорск, ул. Успенская, д. 28</p>
                <p>
                  One Central 8th and 9th Floor, Trade Centre, Trade Centre 2,
                  <br />
                  Dubai - United Arab Emirates
                </p>
              </div>
            </div>

            {/* Legal Links */}
            <div className="footer__legal">
              <div className="footer__legal-item">© 2019 – 2024</div>
              <div className="footer__legal-item">Политика конфиденциальности</div>
              <div className="footer__legal-item">
                Условия
                <br />
                использования
              </div>
            </div>

            {/* Company Info */}
            <div className="footer__company">
              <div className="footer__company-item">ООО «Софт Премьер»</div>
              <div className="footer__company-item">ИНН 5024238266</div>
              <div className="footer__company-item">ОГРН 1235000141782</div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="footer__tech">
          <div className="footer__tech-background">
            <div className="footer__tech-overlay" />
            <img
              src="https://www.figma.com/api/mcp/asset/b549d1f9-5532-4666-ae1a-eeeecaa4cc31"
              alt=""
              className="footer__tech-image"
            />
          </div>
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
      </div>
    </footer>
  )
}

export default Footer
