import { useState } from 'react'
import './App.css'
import VerticalSkip from './VerticalSkip'
import TitleAndBrand from './TitleAndBrand';
import LoginButton from './LoginButton'
import Fondo from './Fondo';
import FondoDia from './FondoDia';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>
      <div className="relative h-screen w-screen z-0">
        {isDarkMode ? <Fondo /> : <FondoDia />}
        <div className="absolute inset-0 z-10">
          <div className="relative flex flex-col items-center h-full w-full z-20">
            <VerticalSkip skip={30} logo={true}/>  
            <TitleAndBrand />
            <VerticalSkip skip={35} />
            <LoginButton />
            <VerticalSkip skip={20} />
            <VerticalSkip skip={20} />
          </div>
          <a className='fixed top-2/3 left-8 lg:left-24 z-20'>
            <img className='lg:scale-150' src="/keyboardApp.png" />
          </a>
          <button 
            className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg z-20"
            onClick={toggleMode}
          >
            {isDarkMode ? 'Modo claro' : 'Modo Oscuro'}
          </button>
        </div>
        <div className="absolute bottom-0 w-80 z-5 right-12 w-100 lg:scale-150 lg:bottom-10 lg:right-20">
          <img src="/dojo_image.png" alt="Dojo" />
        </div>
      </div>
    </>
  );
}

export default App
