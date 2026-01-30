import Card from '@shared/ui/Card/Card'
import './Design.css'

function Design() {
  return (
    <section className="design">
      <div className="design__container">
        <Card className="design__card">
          <h3 className="design__card-title">Дизайн</h3>
          <p className="design__card-description">
            Формируем у пользователей комфортный опыт взаимодействия с продуктом.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Design
