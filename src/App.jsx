import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='relative flex flex-col bg-slate-800 text-white w-full h-screen overflow-hidden font-extralight'>
      <Navbar />
      <Outlet className=""/>
      <Footer/>
    </div>
  )
}

export default App
