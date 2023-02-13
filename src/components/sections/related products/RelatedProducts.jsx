import ItemRelatedProducts from './ItemRelatedProducts'
import './RelatedProducts.css'
function RelatedProducts() {
    return <>
        <section className="related-products carousel container">
            <h3 className="title">Products related to this item</h3>
            <div className="items">
                <div className="buttons r-btn">
                    <i className="fas fa-angle-right"></i>
                </div>
                <div className="buttons l-btn">
                    <i className="fas fa-angle-left"></i>
                </div>
                <ItemRelatedProducts rate='7' price='27.89' img='https://m.media-amazon.com/images/I/31Q+1u2XFmL._AC_UF320,320_SR320,320_.jpg' title='SURUIMA GK Vegeta Figure Statues Figurine DBZ Super Saiyan Collection Birthday Gift...' />
                <ItemRelatedProducts rate='7' price='30.30' img='https://m.media-amazon.com/images/I/41Noq2y0W3L._AC_UF320,320_SR320,320_.jpg' title='Anime DBZ Actions Figures Vegeta Figure Statues Figurine Model Doll Collection' />
                <ItemRelatedProducts rate='8.3' price='20.50' img='https://m.media-amazon.com/images/I/312bXvRt4OL._AC_UF320,320_SR320,320_.jpg' title='Goku Figure Statues Figurine DBZ Super Saiyan ssj3 Collection Birthday Gifts PVC 4' />
                <ItemRelatedProducts rate='4.8' price='70.30'
                    img='https://m.media-amazon.com/images/I/410dFgufaDL._AC_UF320,320_SR320,320_.jpg'
                    title='Goten Figure Statues Figurine DBZ Action Figre Super Saiyan Collection Birthday' />
                <ItemRelatedProducts rate='6' price='25.98'
                    img='https://m.media-amazon.com/images/I/41x2BTvnnqL._AC_UF320,320_SR320,320_.jpg'
                    title='SURUIMA GK Vegeta Figure Statues DBZ Action Figure Figurine Super Saiyan Blue…' />
                <ItemRelatedProducts rate='9' price='15.89'
                    img='https://m.media-amazon.com/images/I/41v7xUQlTfL._AC_UF320,320_SR320,320_.jpg'
                    title='BODANTOK Uzumaki Action Figure Statue Figurine GK Collection Birthday Gifts PVC 4 ' />
                <ItemRelatedProducts rate='8.6' price='65.86'
                    img='https://m.media-amazon.com/images/I/31o27BS9rhL._AC_UF320,320_SR320,320_.jpg'
                    title='DBZ Majin Buu/ Kid Buu Actions Figure Statue Figurine Collection Birthday Gifts' />
            </div>
            <hr />
        </section>
    </>
}

export default RelatedProducts