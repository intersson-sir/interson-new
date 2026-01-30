import Card from '@shared/ui/Card/Card'
import './Values.css'

function Values() {
  const values = [
    {
      title: 'Качество',
      description: 'Мы не идем на компромиссы в вопросах качества кода и дизайна',
    },
    {
      title: 'Прозрачность',
      description: 'Открытое общение и честность во всех процессах работы',
    },
    {
      title: 'Инновации',
      description: 'Постоянно изучаем новые технологии и внедряем лучшие практики',
    },
    {
      title: 'Результат',
      description: 'Фокусируемся на достижении конкретных бизнес-целей клиента',
    },
  ]

  return (
    <section className="values">
      <div className="values__container">
        <h2 className="values__title">Наши ценности</h2>
        <div className="values__grid">
          {values.map(value => (
            <Card key={value.title} className="values__card">
              <h3 className="values__card-title">{value.title}</h3>
              <p className="values__card-description">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
