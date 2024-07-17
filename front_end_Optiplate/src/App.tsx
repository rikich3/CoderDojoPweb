// import { useEffect } from 'react'

import './App.css'

import VerticalSkip from './VerticalSkip'
import TitleAndBrand from './TitleAndBrand';
import LoginButton from './LoginButton'
import Fondo from './Fondo';
import FondoDia from './FondoDia';


function App() {
  
  
  return (
    <>
      <div className="relative h-screen w-screen">
        <FondoDia/>
        <div className="relative flex flex-col items-center h-full w-full">
          <VerticalSkip skip={30} logo={true}/>  
          <TitleAndBrand />
          <VerticalSkip skip={35} />
          <LoginButton/>
          <VerticalSkip skip={20} />
          <VerticalSkip skip={20} />
        </div>
        <a className='fixed top-2/3 left-8 lg:left-24'>
          <img className='lg:scale-150' src="/keyboardApp.png" />
        </a>
      </div>
    </>
  )

}

export default App
