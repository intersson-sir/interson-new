import WebDev from './sections/WebDev/WebDev'
import Design from './sections/Design/Design'
import AI from './sections/AI/AI'
import './Services.css'

function Services() {
  return (
    <div className="services">
      <div className="services__hero">
        <div className="services__hero-container">
          <h1 className="services__hero-title">
            Услуги
            <br />и решения
          </h1>
          <p className="services__hero-subtitle">
            Мы применяем гибкие методы разработки, подстраиваясь под желания и бюджет заказчика
          </p>
        </div>
      </div>
      <WebDev />
      <Design />
      <AI />
    </div>
  )
}

export default Services
