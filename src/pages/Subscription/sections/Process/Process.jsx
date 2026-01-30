import Card from '@shared/ui/Card/Card'
import './Process.css'

function Process() {
  const steps = [
    {
      title: 'Быстрый старт 24 часа',
      description: 'Высылаем предварительную оценку за 24 часа. Стартуем за 2 дня.',
    },
    {
      title: 'Безопасность',
      description: 'Соблюдаем высокие стандарты киберсекьюрити.',
    },
    {
      title: 'Трекер задач',
      description:
        'Даем доступ в бэклог и трекер задач, где вы можете в любой момент видеть процесс.',
    },
    {
      title: 'Гибкие методологии',
      description: 'Agile, Waterfall, V-Model, Incremental',
    },
    {
      title: 'Документация',
      description: 'Качественно и аккуратно документируем код',
    },
  ]

  return (
    <section className="process">
      <div className="process__container">
        <div className="process__header">
          <span className="process__label">почему к нам возвращаются</span>
          <h2 className="process__title">
            Прозрачные процессы для клиентов любого масштаба: от preseed cтартапов до тендеров и
            госкорпораций
          </h2>
        </div>

        <div className="process__grid">
          {steps.map(step => (
            <Card key={step.title} variant="light" className="process__card">
              <h3 className="process__card-title">{step.title}</h3>
              <p className="process__card-description">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
