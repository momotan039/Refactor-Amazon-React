import ItemSameCategoryBrands from './ItemSameCategoryBrands'
import './SameCategoryBrands.css'

function SameCategoryBrands() {
    return <>
        <section className="same-category-brands container">
            <h1>Brands in this category on Amazon</h1>
            <div className="items">
                <ItemSameCategoryBrands 
                    title='Enter the world of tamashii nation'
                    logo='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/3e20432b-4c34-4b4a-815c-7f875162ee87._CR0,0,400,400_AC_SX96_SY48_QL70_.jpg'
                    img='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/9a2a2c68-c6f7-4906-bcbe-b4854d760744._CR1081,0,1338,700_SX460_QL70_.jpg' />
                <ItemSameCategoryBrands 
                    title='Anime Action Figure Statue Model'
                    logo='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/ba3691a7-9250-44be-b5e5-48e6f0978dbf._CR0,0,3000,3000_AC_SX96_SY48_QL70_.jpg'
                    img='https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/42882248-cb28-4c52-b8eb-fe1997f92ad4._CR0,0,3600,1884_SX460_QL70_.jpg' />
            </div>
            <hr />
        </section>
    </>
}

export default SameCategoryBrands