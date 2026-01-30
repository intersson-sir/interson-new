import Card from '@shared/ui/Card/Card'
import './WebDev.css'

function WebDev() {
  const services = [
    {
      title: 'Разработка веб-приложений',
      description: 'Создаем высокопроизводительные и масштабируемые веб-приложения',
    },
    {
      title: 'Разработка мобильных приложений',
      description: 'Разрабатываем кросс-платформенные мобильные приложения',
    },
    {
      title: 'Разработка Web3 продуктов',
      description:
        'Проектируем и разрабатываем инновационные решения на базе блокчейна и децентрализованных технологий',
    },
  ]

  return (
    <section className="webdev">
      <div className="webdev__container">
        <div className="webdev__grid">
          {services.map(service => (
            <Card key={service.title} className="webdev__card">
              <h3 className="webdev__card-title">{service.title}</h3>
              <p className="webdev__card-description">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WebDev
