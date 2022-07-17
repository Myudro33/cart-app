import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

const App = () => {
  const [url, setUrl] = useState('')

  return (
    <ShoppingCartProvider>
      <Navbar url={url} />
      <div className='mb-4'>
        <Routes>
          <Route path='/' element={<Home setUrl={setUrl} />} />
          <Route path='/store' element={<Store setUrl={setUrl} />} />
          <Route path='about' element={<About setUrl={setUrl} />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  )
}

export default App