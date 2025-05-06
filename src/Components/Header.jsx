import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import logo from '/Log.png';
import redGNB from '/gnbTruck.png';
import gerb from '/gerb.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  // Закрываем меню при переходе
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        {/* Герб */}
        <div className="gerb-container">
          <img 
            src={gerb} 
            alt={t('header.gerbAlt')} 
            className="gerb" 
          />
<p className="gerb-text">Город<br/>Вологда</p>
        </div>

        {/* Основной логотип */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt={t('header.logoAlt')} 
            className="logo" 
          />
        </div>

        {/* GNB */}
        <div className="gnb-container">
          <img 
            src={redGNB} 
            alt={t('header.gnbAlt')} 
            className="gnb" 
          />
        </div>

        {/* Навигация */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <NavLink 
            to="/" 
            end 
            className="nav-link"
          >
            {t('header.home')}
          </NavLink>
          <NavLink 
            to="/info" 
            className="nav-link"
          >
            {t('header.info')}
          </NavLink>
          <NavLink 
            to="/our-works" 
            className="nav-link"
          >
            {t('header.works')}
          </NavLink>
          <NavLink 
            to="/contacts" 
            className="nav-link"
          >
            {t('header.contacts')}
          </NavLink>
        </nav>

        {/* Бургер-кнопка */}
        <button 
          className={`burger ${isMenuOpen ? 'burger-open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t('header.menuButton')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Подложка */}
      {isMenuOpen && (
        <div 
          className="overlay" 
          onClick={() => setIsMenuOpen(false)} 
        />
      )}
    </header>
  );
}

export default Header;