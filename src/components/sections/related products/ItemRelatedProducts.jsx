function ItemRelatedProducts(props){
return <>
<div className="product">
                <a href="#">
                    <img className="image"
                        src={props.img}/>
                    <a href="#">{props.title}</a>
                    <div className="stars">
                        <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                        <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                        <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                        <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                        <img src="https://m.media-amazon.com/images/G/01/perc/star-halffill.svg" alt="halfstar"/>
                        {props.rate}
                    </div>
                    <div>
                        <span className="price">
                            ${props.price}
                        </span>
                        <img className="prime" src="https://m.media-amazon.com/images/G/01/perc/prime-logo.svg"/>
                    </div>
                    <p>
                        <span className="save">Save 5%</span>
                        with coupon
                    </p>
                </a>

            </div>
</>
}
export default ItemRelatedProducts