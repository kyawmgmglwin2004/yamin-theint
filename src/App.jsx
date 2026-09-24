import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Resellers from './pages/Resellers'
import Contact from './pages/Contact'

export default function App() {
  return <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/resellers" element={<Resellers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  </BrowserRouter>
}
