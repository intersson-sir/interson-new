import './Process.css'

function Process() {
  return (
    <section className="process">
      <div className="process__container">
        {/* Header */}
        <div className="process__header">
          <p className="process__label">почему к нам возвращаются</p>
          <h2 className="process__title">
            Прозрачные процессы для клиентов любого масштаба: от preseed cтартапов до тендеров и
            госкорпораций
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="process__grid">
          {/* Card 1: Быстрый старт - Large */}
          <div className="process__card process__card--large">
            <div className="process__card-icon">
              {/* Icon placeholder */}
            </div>
            <h3 className="process__card-title">
              Быстрый старт
              <br />
              24 часа
            </h3>
            <p className="process__card-description">
              Высылаем предварительную оценку за 24 часа. Стартуем за 2 дня.
            </p>
          </div>

          {/* Card 2: Безопасность */}
          <div className="process__card process__card--medium">
            <div className="process__card-icon process__card-icon--security">
              {/* Icon placeholder */}
            </div>
            <h3 className="process__card-title">Безопасность</h3>
            <p className="process__card-description">
              Соблюдаем высокие стандарты киберсекьюрити.
            </p>
          </div>

          {/* Card 3: Трекер задач */}
          <div className="process__card process__card--medium">
            <div className="process__card-icon process__card-icon--tracker">
              {/* Icon placeholder */}
            </div>
            <h3 className="process__card-title">Трекер задач</h3>
            <p className="process__card-description">
              Даем доступ в бэклог и трекер задач, где вы можете в любой момент видеть процесс.
            </p>
          </div>

          {/* Card 4: Гибкие методологии */}
          <div className="process__card process__card--medium">
            <div className="process__card-icon process__card-icon--methodologies">
              {/* Icon placeholder */}
            </div>
            <h3 className="process__card-title">Гибкие методологии</h3>
            <p className="process__card-description">
              Agile, Waterfall, V-Model, Incremental
            </p>
          </div>

          {/* Card 5: Документация */}
          <div className="process__card process__card--medium">
            <div className="process__card-icon process__card-icon--documentation">
              {/* Icon placeholder */}
            </div>
            <h3 className="process__card-title">Документация</h3>
            <p className="process__card-description">
              Качественно и аккуратно документируем код
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
