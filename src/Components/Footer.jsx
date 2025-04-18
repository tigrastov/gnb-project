import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {currentYear} Название компании. Все права защищены.</p>
        
        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
          <a href="#">VK</a>
        </div>

        <nav>
          <ul className="footer-links">
            <li><a href="/privacy">Политика конфиденциальности</a></li>
            <li><a href="/terms">Условия использования</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;