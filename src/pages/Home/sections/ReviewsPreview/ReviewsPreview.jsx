import './ReviewsPreview.css'

function ReviewsPreview() {
  return (
    <section className="reviews-preview">
      <div className="reviews-preview__container">
        {/* Section Header */}
        <div className="reviews-preview__header">
          <p className="reviews-preview__label">Ключевые проекты</p>
          <h2 className="reviews-preview__title">
            От разработки MVP <br />
            до роста и развития
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="reviews-preview__projects">
          {/* Project 1: Faza Watches */}
          <div className="reviews-preview__project reviews-preview__project--large">
            <div className="reviews-preview__project-wrapper">
              <div className="reviews-preview__project-image reviews-preview__project-image--large">
                <img
                  src="https://www.figma.com/api/mcp/asset/658f6bc5-4792-45f3-ae2a-9ea0dccbc5be"
                  alt="Faza Watches"
                  className="reviews-preview__image"
                />
              </div>
              
              {/* Icon */}
              <div className="reviews-preview__project-icon">
                <img
                  src="https://www.figma.com/api/mcp/asset/7a0ff317-d10f-4e11-bc8b-80ede03c19da"
                  alt="Project icon"
                  className="reviews-preview__icon"
                />
              </div>
            </div>
            
            <h3 className="reviews-preview__project-title">Faza Watches</h3>
            <p className="reviews-preview__project-description">
              Разработали веб-сайт для FAZA Watches — премиального бренда люксовых часов,
              ювелирных изделий и аксессуаров
            </p>
            <div className="reviews-preview__project-tags">
              <span className="reviews-preview__tag">Node.js</span>
              <span className="reviews-preview__tag">Typescript</span>
            </div>
          </div>

          {/* Projects Row: YSV + WP NFT */}
          <div className="reviews-preview__row">
            {/* Project 2: YSV */}
            <div className="reviews-preview__project reviews-preview__project--small">
              <div className="reviews-preview__project-image reviews-preview__project-image--small">
                <img
                  src="https://www.figma.com/api/mcp/asset/2eca1945-b175-45ab-8a3b-c4f4bdca0770"
                  alt="YSV"
                  className="reviews-preview__image"
                />
              </div>
              <h3 className="reviews-preview__project-title">YSV</h3>
              <p className="reviews-preview__project-description">
                Запустили онлайн-бутик YSV — бренда эксклюзивных дизайнерских платьев в
                премиум-сегменте
              </p>
            </div>

            {/* Project 3: WP NFT */}
            <div className="reviews-preview__project reviews-preview__project--medium">
              <div className="reviews-preview__project-image reviews-preview__project-image--medium">
                {/* Placeholder for NFT project image */}
              </div>
              <h3 className="reviews-preview__project-title">WP NFT</h3>
              <p className="reviews-preview__project-description">
                The newest functional at the field of NFT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsPreview
