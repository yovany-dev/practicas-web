import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Index } from './pages'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { FormPage } from './pages/FormPage'
import { User } from './pages/User'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />}>
          <Route path='/contact/form' element={<FormPage />} />
        </Route>
        <Route path='/user/:userId' element={<User />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
