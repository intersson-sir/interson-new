import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <Logo />
        </Link>

        {/* Navigation */}
        <nav className="header__nav">
          <NavLink to="/about" className="header__link">
            О нас
          </NavLink>
          <NavLink to="/services" className="header__link">
            Услуги
          </NavLink>
          <NavLink to="/subscription" className="header__link">
            Подписка
          </NavLink>
          <NavLink to="/reviews" className="header__link">
            Отзывы
          </NavLink>
          <NavLink to="/contact" className="header__link">
            Контакты
          </NavLink>
        </nav>

        {/* Actions: Language Switcher + Button */}
        <div className="header__actions">
          {/* Language Switcher */}
          <div className="header__lang">
            <div className="header__lang-flag header__lang-flag--ru"></div>
            <span className="header__lang-text header__lang-text--active">ru</span>
            <span className="header__lang-separator">/</span>
            <div className="header__lang-flag header__lang-flag--en"></div>
            <span className="header__lang-text header__lang-text--inactive">en</span>
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="header__button">
            Обсудить проект
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
