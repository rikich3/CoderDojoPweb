function Fondo() {
  return (
  <div className="frame absolute inset-0">
    <link rel="stylesheet" href="/fondo.css"/>
    <div className="shooting-stars">
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
      <div className="shooting-star shooting-star-3"></div>
      <div className="shooting-star shooting-star-4"></div>
      <div className="shooting-star shooting-star-5"></div>
    </div>
    <div className="pyramids">
      <div className="pyramid pyramid-giza"></div>
      <div className="pyramid pyramid-Khafre"></div>
      <div className="pyramid pyramid-menkaure"></div>
    </div>
    <div className="sky">
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>
    </div>
  </div>
  )
}

export default Fondo