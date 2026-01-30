import Plans from './sections/Plans/Plans'
import Process from './sections/Process/Process'
import FAQ from './sections/FAQ/FAQ'
import './Subscription.css'

function Subscription() {
  return (
    <div className="subscription">
      <div className="subscription__hero">
        <div className="subscription__hero-container">
          <h1 className="subscription__hero-title">Сайт по подписке</h1>
          <p className="subscription__hero-subtitle">
            Получите профессиональный сайт без больших первоначальных вложений. Платите ежемесячно
            или выкупите полностью в любой момент.
          </p>
        </div>
      </div>
      <Plans />
      <Process />
      <FAQ />
    </div>
  )
}

export default Subscription
