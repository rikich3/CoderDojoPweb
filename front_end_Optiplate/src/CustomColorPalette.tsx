import { IoAccessibilityOutline } from "react-icons/io5";

const ColorPalette = () => {
  return (
    <div>
      <div className="h-16 w-16 m-0 p-0 bg-dojoSky shadow-lg"></div>
      <div className="h-16 w-16 m-0 p-0 bg-dojoBuilding shadow-lg"></div>
      
      <Icons icon={<IoAccessibilityOutline size="64"/>}/>
    </div>
  );
};


const Icons = ({ icon })=> (
  <div className='sidebar-icon'>
    {icon}
  </div>
);

export default ColorPalette