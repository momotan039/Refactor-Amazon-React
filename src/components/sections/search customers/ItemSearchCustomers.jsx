function ItemSearchCustomers(props){

    return <>
     <div className="product">
                <a href="#">
                    <img className="image" src={props.img}/>
                    <a href="#">{props.title}</a>
                </a>
            </div>
    </>
}
export default ItemSearchCustomers