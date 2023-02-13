import './InfoProduct.css'
function InfoProduct(){
return<>
<section className="info-product container">
        <h3 className="title">Product information</h3>
        <div className="flex">
            <table>
                <tbody>
                    <tr>
                        <td>Brand</td>
                        <td>SURUIMA GK</td>
                    </tr>
                    <tr>
                        <td>Material</td>
                        <td>Plastic, Polyvinyl Chloride</td>
                    </tr>
                    <tr>
                        <td>Occasion</td>
                        <td>Birthday</td>
                    </tr>
                    <tr>
                        <td>Product Dimensions</td>
                        <td>3"L x 6"W x 11"H</td>
                    </tr>
                    <tr>
                        <td>Number of Items</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Shape</td>
                        <td>Novelty</td>
                    </tr>
                    <tr>
                        <td>Manufacturer</td>
                        <td>zhou</td>
                    </tr>
                    <tr>
                        <td>Item Weight</td>
                        <td>1.94 pounds</td>
                    </tr>
                    <tr>
                        <td>ASIN</td>
                        <td>B0BN7JGTWL</td>
                    </tr>
                    <tr>
                        <td>Manufacturer recommended age</td>
                        <td>15 years and up</td>
                    </tr>
                    <tr>
                        <td>Best Sellers Rank</td>
                        <td>
                            #36,288 in Toys & Games (<a href="#">See Top 100 in Toys & Games</a>)
                            #2,079 in <a href="#">Action Figures</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Customer Reviews</td>
                        <td>
                            <div className="rating">
                                <div className="stars">
                                    <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                                    <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                                    <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                                    <img src="https://m.media-amazon.com/images/G/01/perc/star-fullfill.svg" alt="star"/>
                                    <img src="https://m.media-amazon.com/images/G/01/perc/star-halffill.svg"
                                        alt="halfstar"/>
                                    <span className="arrow"></span>
                                    <a href="#" className="num">8 ratings</a>
                                </div>
                            </div>
                            4.7 out of 5 stars
                        </td>
                    </tr>

                </tbody>
            </table>
            <div className="warranty">
                <span className="sup-title">Warranty & Support</span>
                <hr/>
                <p>
                    <b>Product Warranty:</b> For warranty information about this product, please <a href="#">click
                        here</a>
                </p>
                <span className="sup-title">Feedback</span>
                <hr/>
                <p>Would you like to <a href="#">tell us about a lower price?</a>
                    <span className="arrow"></span>
                </p>
            </div>
        </div>
    </section>
</>
}

export default InfoProduct