import './Contacts.css';
import { useState } from "react";
 

function Contacts() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const botToken = "7854407106:AAHIdQlFlNplJcFENxw5z78sfWQhPyTMI0k";
    const chatId = "-1002665257919";
    const text = `📞 *Новая заявка!*\nИмя: ${name}\nТелефон: ${phone}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
      setIsSubmitted(true);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Что-то пошло не так. Попробуйте позже.");
    }
  };

  
  return (
    <div className="contacts-wrapper">
      <div className='contacts-page'>
        <h1>Контакты</h1>
        <p>Наши контактные данные и форма обратной связи.</p>
        
        {/* Перемещённые контакты в одну строку */}
        <div className="contact-info-header">
          <h2>Наши контакты</h2>
          <div className="contact-items-row">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+7 (123) 456-78-90</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>info@vologda.ru</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="https://t.me/vologda_help" target="_blank" rel="noopener noreferrer">
                @vologda_help
              </a>
            </div>
          </div>
        </div>
  
<div className='body'>

        {/* Форма остаётся на своём месте */}
        <div className="contacts-container">
          <div className="callback-form-container">
            <div className="callback-form">
              <h2>Заказать обратный звонок</h2>
              {isSubmitted ? (
                <p className="success-message">Спасибо! Мы скоро вам перезвоним.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ваш телефон"
                      required
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Заказать звонок
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className='place-container'>
  <div className="location-info">
    <h3>Как нас найти</h3>
    <p>г. Вологда</p>
    <p>улица Козленская, дом 128, офис 1</p>
    <p>Почтовый индекс: 160012</p>
  </div>
  
  <div className="map-container">
    {/* Статичное превью карты */}
    <a 
      href="https://yandex.ru/maps/?text=Вологда, Козленская 128" 
      target="_blank" 
      rel="noopener noreferrer"
    >
     <img 
        src="https://static-maps.yandex.ru/1.x/?lang=ru_RU&ll=39.8783,59.2205&z=16&l=map&pt=39.8783,59.2205,pm2rdl" 
        alt="Карта расположения"
        className="map-image"
      />
    </a>
    
    {/* Кнопки для навигации */}
    <div className="map-buttons">
      <a
        href="https://yandex.ru/maps/?text=Вологда, Козленская 128"
        target="_blank"
        rel="noopener noreferrer"
        className="map-button yandex"
      >
        Яндекс.Карты
      </a>
      <a
        href="https://www.google.com/maps/search/Вологда, Козленская 128"
        target="_blank"
        rel="noopener noreferrer"
        className="map-button google"
      >
        Google Maps
      </a>
    </div>
  </div>
</div>

          </div>

      </div>
    </div>
  );
};
export default Contacts;