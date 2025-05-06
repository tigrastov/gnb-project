import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Components/Header';
import Home from './Pages/Home';
import Info from './Pages/Info';
import OurWorks from './Pages/OurWorks';
import Contacts from './Pages/Contacts';

import Equipment from './Pages/Equipment';
import './i18n'; // Импортируем без .js

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (['en', 'ru'].includes(browserLang)) {
      i18n.changeLanguage(browserLang);
    } else {
      i18n.changeLanguage('ru'); // Явное указание fallback
    }
  }, [i18n]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/info" element={<Info />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;