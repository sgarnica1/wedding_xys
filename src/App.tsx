import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import RsvpPage from './components/RsvpPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/invite/:id" element={<Home />} />
        <Route path="/rsvp/:id" element={<RsvpPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
