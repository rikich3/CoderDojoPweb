const Logo = (props) => {
  if(props.logo){
    return (
      <a href="https://coderdojo.com/" target="_blank">
      <img src="/coderdojo-logo.png" className="h-20"/>
      </a>
    )
  } else {
    return (<></>)
  }
}

export default Logo