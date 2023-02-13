import './BuyItWith.css'
function BuyItWith(){
return <>
 <section className="buy-it-with container">
        <h3 className="title">Buy it with</h3>
        <div className="products">
            <div className="items">
                <img src="https://m.media-amazon.com/images/I/71LaXhDzmNL._AC_SX425_.jpg"/>
                <span className="plus">+</span>
                <img src="https://images-na.ssl-images-amazon.com/images/I/61gnIO5cy4L._AC_UL116_SR116,116_.jpg"/>
                <div className="price">
                    Total Price:<span className="price">$62.00</span>
                    <button className="btn yellow">
                        Add both to Cart
                    </button>
                </div>
            </div>
            <img className="sponsored" src="/src/assets/ad1.png" />
        </div>
        <div className="info">
            <i className="fas fa-info-circle"></i>
            <p>
                One of these items ships sooner than the other.
                <a href="#">Show details</a>
            </p>
        </div>
        <div className="includes">
            <input type="checkbox"/>
            <p>
                <b>This item:</b>
                SURUIMA GK Vegeta Figure Statues Figurine DBZ Super Saiyan Collection Birthday Gifts PVC 11Inch
                <span className="price">$32.89</span>
            </p>
        </div>
        <div className="includes">
            <input type="checkbox"/>
            <a href="#">Dragon Ball MAXIMATIC Vegeta II FIG
                <span className="price">$29.11</span></a>
        </div>
        <hr/>
    </section>
</>
}
export default BuyItWith