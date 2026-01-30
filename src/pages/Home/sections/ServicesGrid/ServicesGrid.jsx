import './ServicesGrid.css'

function ServicesGrid() {
  return (
    <section className="services-grid">
      <div className="services-grid__container">
        {/* Title */}
        <h2 className="services-grid__title">
          Услуги
          <br />и решения
        </h2>

        {/* Services Cards */}
        <div className="services-grid__cards">
          {/* Card 1: Аналитика проекта */}
          <div className="services-grid__card services-grid__card--dark">
            <h3 className="services-grid__card-title">Аналитика проекта</h3>
            <p className="services-grid__card-description">
              Полностью погружаемся в продукт, исследуем лучшие кейсы на рынке
            </p>
          </div>

          {/* Card 2: Machine learning */}
          <div className="services-grid__card services-grid__card--dark">
            <h3 className="services-grid__card-title">Machine learning</h3>
            <p className="services-grid__card-description">
              Разрабатываем AI-продукты, которые улучшают бизнес-процессы
            </p>
          </div>

          {/* Card 3: Quote Card */}
          <div className="services-grid__card services-grid__card--quote">
            <div className="services-grid__card-icon">"</div>
            <p className="services-grid__card-quote">
              Мы применяем гибкие методы разработки, подстраиваясь под желания и бюджет заказчика.
            </p>
            <div className="services-grid__card-author">
              <p className="services-grid__author-name">Андрей Громов</p>
              <p className="services-grid__author-role">CEO INTERSON</p>
            </div>
          </div>

          {/* Card 4: Дизайн */}
          <div className="services-grid__card services-grid__card--dark">
            <h3 className="services-grid__card-title">Дизайн</h3>
            <p className="services-grid__card-description">
              Формируем у пользователей комфортный опыт взаимодействия с продуктом.
            </p>
          </div>

          {/* Card 5: Разработка мобильных приложений */}
          <div className="services-grid__card services-grid__card--dark">
            <h3 className="services-grid__card-title">
              Разработка мобильных приложений
            </h3>
            <p className="services-grid__card-description">
              Разрабатываем кросс-платформенные мобильные приложения
            </p>
          </div>

          {/* Card 6: Разработка Web3 продуктов */}
          <div className="services-grid__card services-grid__card--dark">
            <h3 className="services-grid__card-title">Разработка Web3 продуктов</h3>
            <p className="services-grid__card-description">
              Проектируем и разрабатываем инновационные решения на базе блокчейна и
              децентрализованных технологий.
            </p>
          </div>

          {/* Card 7: Разработка веб-приложений */}
          <div className="services-grid__card services-grid__card--dark">
            <h3 className="services-grid__card-title">
              Разработка
              <br />
              веб-приложений
            </h3>
            <p className="services-grid__card-description">
              Создаем высокопроизводительные и масштабируемые веб-приложения
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
