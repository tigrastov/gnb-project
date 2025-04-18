import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Info from './Pages/Info'
import OurWorks from './Pages/OurWorks'
import Contacts from './Pages/Contacts'

function App() {
  return (
    <Router> {/* Теперь он ТОЛЬКО здесь */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App