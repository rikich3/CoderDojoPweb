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
      <div className="relative h-screen w-screen">
        {isDarkMode ? <Fondo /> : <FondoDia />}
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
        <button 
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg"
          onClick={toggleMode}
        >
          {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>
    </>
  );
}

export default App
