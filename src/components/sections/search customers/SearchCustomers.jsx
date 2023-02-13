import ItemSearchCustomers from './ItemSearchCustomers'
import './SearchCustomers.css'
function SearchCustomers(){
return <>
  <section className="search-customers carousel container">
        <h3 className="title">Customers also search</h3>
        <div className="items">
            <div className="buttons r-btn">
                <i className="fas fa-angle-right"></i>
            </div>
            <div className="buttons l-btn">
                <i className="fas fa-angle-left"></i>
            </div>
            <ItemSearchCustomers title='demon hunter figure' img='https://m.media-amazon.com/images/I/71fSh-pdt2L._AC_UL140_SR140,140_.jpg'  />
            <ItemSearchCustomers title='suruima gk' img='https://m.media-amazon.com/images/I/61L8C8bkPkL._AC_UL140_SR140,140_.jpg' />
            <ItemSearchCustomers title='dbz majin vegeta figure' img='https://m.media-amazon.com/images/I/61UXWGVP1BL._AC_UL140_SR140,140_.jpg' />
            <ItemSearchCustomers title='dragon ball super statue' img='https://m.media-amazon.com/images/I/61SPwzYtLWL._AC_UL140_SR140,140_.jpg' />
            <ItemSearchCustomers title='dbz statues' img='https://m.media-amazon.com/images/I/61r32VHL92L._AC_UL140_SR140,140_.jpg' />
            <ItemSearchCustomers title='vegeta figure' img='https://m.media-amazon.com/images/I/713Y6rg9sKL._AC_UL140_SR140,140_.jpg' />
            <ItemSearchCustomers title='bandai dragon ball' img='https://m.media-amazon.com/images/I/61ba2KjkC1L._AC_UL140_SR140,140_.jpg' />
            <ItemSearchCustomers title='Gotenx figura' img='https://m.media-amazon.com/images/I/71A56eQyS7L._AC_UL140_SR140,140_.jpg' />
        </div>
        <hr/>
    </section>
</>
}

export default SearchCustomers