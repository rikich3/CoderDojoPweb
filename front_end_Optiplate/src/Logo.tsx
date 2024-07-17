const Logo = (props: { logo: any }) => {
  if(props.logo){
    return (
      <div >
      <a href="https://coderdojo.com/" target="_blank">
      <img src="/coderdojo-logo.png" className="h-20"/>
      <img src="/unsa-logo.png" className="h-20"/>
      </a>
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Logo