import Card from '@shared/ui/Card/Card'
import './AI.css'

function AI() {
  const services = [
    {
      title: 'Аналитика проекта',
      description: 'Полностью погружаемся в продукт, исследуем лучшие кейсы на рынке',
    },
    {
      title: 'Machine learning',
      description: 'Разрабатываем AI-продукты, которые улучшают бизнес-процессы',
    },
  ]

  return (
    <section className="ai">
      <div className="ai__container">
        <div className="ai__grid">
          {services.map(service => (
            <Card key={service.title} className="ai__card">
              <h3 className="ai__card-title">{service.title}</h3>
              <p className="ai__card-description">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AI
