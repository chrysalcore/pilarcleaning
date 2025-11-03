import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/sections/header/Header'
import Hero from './components/sections/hero/Hero'
import Banner from "./components/others/Banner"
import Footer from './components/sections/footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Banner />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
