import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '/Log.png';
import redGNB from '/gnbTruck.png';
import gerb from '/gerb.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Закрываем меню при переходе
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
  <div className="header-container">
    {/* Герб */}
    <div className="gerb-container">
      <img src={gerb} alt="Герб" className="gerb" />
    </div>

    {/* Основной логотип */}
    <div className="logo-container">
      <img src={logo} alt="Логотип" className="logo" />
    </div>

    {/* GNB */}
    <div className="gnb-container">
      <img src={redGNB} alt="GNB" className="gnb" />
    </div>

    {/* Навигация */}
    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
      <NavLink to="/" end className="nav-link">Главная</NavLink>
      <NavLink to="/info" className="nav-link">Ликбез</NavLink>
      <NavLink to="/our-works" className="nav-link">Наши работы</NavLink>
      <NavLink to="/contacts" className="nav-link">Контакты</NavLink>
    </nav>

    {/* Бургер-кнопка */}
    <button className={`burger ${isMenuOpen ? 'burger-open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  {/* Подложка */}
  {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}
</header>
  );
}

export default Header;