import Logo from './Logo'

const VerticalSkip = (props) => {
  return (
    <div className="w-full p-5" style={{height: `${props.skip}vh`}} >
      <Logo logo={props.logo}/>
    </div>
  );
};

export default VerticalSkip