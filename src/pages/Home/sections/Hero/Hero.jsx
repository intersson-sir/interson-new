import './Hero.css'

function Hero() {
  const technologies = ['BigData', 'FinTech', 'Crypto', 'ML', 'IoT', 'BPA']

  return (
    <section className="hero">
      <div className="hero__container">
        {/* Main Title */}
        <h1 className="hero__title">
          IT-партнер для быстрого запуска цифровых продуктов
        </h1>

        {/* Technology Tags */}
        <div className="hero__tags">
          {technologies.map(tech => (
            <span key={tech} className="hero__tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Staff Badge - "35+ экспертов" */}
        <div className="hero__staff">
          <div className="hero__staff-avatars">
            <img
              src="https://www.figma.com/api/mcp/asset/85894aa9-4f74-4504-a7be-47e332463553"
              alt="Expert 1"
              className="hero__staff-avatar"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/8d25df39-bc4c-406d-a3c4-cc59c39339af"
              alt="Expert 2"
              className="hero__staff-avatar"
            />
            <img
              src="https://www.figma.com/api/mcp/asset/35eaba7d-6a8d-468a-8d81-437108d393c7"
              alt="Expert 3"
              className="hero__staff-avatar"
            />
          </div>
          <div className="hero__staff-text">
            <p className="hero__staff-title">35+ экспертов</p>
            <p className="hero__staff-subtitle">Стек by стек</p>
          </div>
        </div>

        {/* Hero Image - Laptop */}
        <div className="hero__image">
          <img
            src="https://www.figma.com/api/mcp/asset/5c352fd6-d25b-4978-b6d3-fed8fdec2640"
            alt="Digital products showcase"
            className="hero__image-laptop"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
