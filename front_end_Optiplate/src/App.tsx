// import { useEffect } from 'react'

import './App.css'

import VerticalSkip from './VerticalSkip'
import TitleAndBrand from './TitleAndBrand';
import LoginButton from './LoginButton'


function App() {
  
  
  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen bg-[url('/codedojo_movil_bg.png')] bg-cover
                      lg:bg-[url('/codedojo_desktop_bg.png')]">
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
    </>
  )
}

export default App
