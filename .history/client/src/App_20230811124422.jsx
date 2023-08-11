import './App.css'
import { BrowserRouter, Link, Router, Routes} from 'react-router-dom'

import { logo } from './assets'
import { CreatePost, Home } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b-[#e6ebf4]'>

        </header>
      </BrowserRouter>
    </>
  )
}

export default App
