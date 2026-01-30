import './ServicesPreview.css'

function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="services-preview__container">
        {/* Left Text Block */}
        <div className="services-preview__content">
          <div className="services-preview__header">
            <p className="services-preview__label">о нас</p>
            <h2 className="services-preview__title">
              Помогаем быстро расти проектам за счет внедрения лучших технологических решений.
            </h2>
          </div>
          <p className="services-preview__description">
            Наша работа — это синтез опыта в разных сферах: от разработки и дизайна до стратегии и
            технологий. Разрабатываем продукты с нуля, а также улучшаем существующие проекты,
            учитывая потребности заказчика.
          </p>
        </div>

        {/* Stat Card 1: 120+ Projects */}
        <div className="services-preview__stat services-preview__stat--projects">
          <h3 className="services-preview__stat-number">120+</h3>
          <p className="services-preview__stat-text">Реализованных проектов</p>
          <div className="services-preview__stat-visual">
            <div className="services-preview__phone"></div>
          </div>
        </div>

        {/* Stat Card 2: 35+ Developers */}
        <div className="services-preview__stat services-preview__stat--developers">
          <h3 className="services-preview__stat-number">35+</h3>
          <p className="services-preview__stat-text">Разработчиков в команде</p>
          <div className="services-preview__stat-avatars">
            <img
              src="https://www.figma.com/api/mcp/asset/82261d8d-45d4-4ef1-960c-ea108c912d8d"
              alt="Developer 1"
              className="services-preview__avatar"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/814e2687-6c53-4ee5-8bd3-1cc8ad6ddea3"
              alt="Developer 2"
              className="services-preview__avatar"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/2d251ac4-a45b-434e-af61-edab89a253de"
              alt="Developer 3"
              className="services-preview__avatar"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/08973533-04c5-4a9c-828a-6fd8744e29fa"
              alt="Developer 4"
              className="services-preview__avatar"
            />
          </div>
        </div>

        {/* Stat Card 3: 7 Years */}
        <div className="services-preview__stat services-preview__stat--years">
          <h3 className="services-preview__stat-number">7</h3>
          <p className="services-preview__stat-text">
            Лет на рынке
            <br />
            разработки
          </p>
          <div className="services-preview__stat-images">
            <img
              src="https://www.figma.com/api/mcp/asset/03d7d160-2b1e-477b-b543-c08ae1938a27"
              alt="Tech 1"
              className="services-preview__tech-img services-preview__tech-img--1"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/f2a23cf4-be1a-4a27-9b7b-f60685348f64"
              alt="Tech 2"
              className="services-preview__tech-img services-preview__tech-img--2"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/f6e8345d-15db-464a-9a8c-630b8299466c"
              alt="Tech 3"
              className="services-preview__tech-img services-preview__tech-img--3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
