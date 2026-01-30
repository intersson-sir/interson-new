import Team from './sections/Team/Team'
import Mission from './sections/Mission/Mission'
import Values from './sections/Values/Values'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero-container">
          <h1 className="about__hero-title">О нас</h1>
          <p className="about__hero-subtitle">
            Мы — команда профессионалов, которая создает цифровые продукты с 2019 года
          </p>
        </div>
      </div>
      <Mission />
      <Team />
      <Values />
    </div>
  )
}

export default About
