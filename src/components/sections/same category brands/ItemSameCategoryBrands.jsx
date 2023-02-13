function ItemSameCategoryBrands(props){
    return <>
     <div className="item">
            <img src={props.img}/>
            <div className="bottom">
                <img src={props.logo}/>
                <span>{props.title}</span>
            </div>
        </div>
    </>
}

export default ItemSameCategoryBrands