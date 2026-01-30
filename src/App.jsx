import { Routes, Route } from 'react-router-dom'
import Layout from '@shared/layout/Layout'
import Home from '@pages/Home/Home'
import About from '@pages/About/About'
import Services from '@pages/Services/Services'
import Subscription from '@pages/Subscription/Subscription'
import Reviews from '@pages/Reviews/Reviews'
import Contact from '@pages/Contact/Contact'
import Login from '@pages/Login/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
