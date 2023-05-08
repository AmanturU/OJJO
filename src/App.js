import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Collection from './Pages/Collection'
import About from './Pages/About'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App