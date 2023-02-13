import './Sponsored.css'

function Sponsored(){
    return <>
      <div className="sponsored">
        <img className="item" src="https://m.media-amazon.com/images/I/61V6tZU7C5S._AC_QL10_SX1960_SY110_FMwebp_.jpg"
            alt="image"/>
        <div className="describe">Gvendo Build-on Brick Coffee Mug,Funny DIY Coffee Cup with Building Blocks,Creative Water
            Cup for Christmas ,Kids,Men ,Women (Pink)</div>
        <div className="starts">
            <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
            <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
            <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
            <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
            <img src="https://m.media-amazon.com/images/G/01/perc/star-halffill.svg" alt="halfstar"/>
            340
        </div>
        <div className="price">
            <span>$</span>12<span>99</span>
            <img src="https://m.media-amazon.com/images/G/01/perc/prime-logo.svg" alt="prime" className="prime"/>
        </div>
        <div className="coupon">
            9% off coupon
            <span className="skew"></span>
        </div>
    </div>
    </>
}

export default Sponsored