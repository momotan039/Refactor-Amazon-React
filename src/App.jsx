import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Sponsored from './components/sponsored/Sponsored'
import ProdcutDetials from './components/sections/product detials/ProductDetials'
import BuyItWith from './components/sections/buy it with/BuyItWith'
import RelatedProducts from './components/sections/related products/RelatedProducts'
import SearchCustomers from './components/sections/search customers/SearchCustomers'
import InfoProduct from './components/sections/info product/InfoProduct'
import ProductDesription from './components/sections/prodcut description/Product Description'
import ViewedByCustomer from './components/sections/viewed by customer/ViewedByCustomer'
import Videos from './components/sections/Videos/Videos'
import SameCategoryBrands from './components/sections/same category brands/SameCategoryBrands'
import LookingFor from './components/sections/looking for/LookingFor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Sponsored/>
      <ProdcutDetials/>
      <BuyItWith/>
      <RelatedProducts/>
      <SearchCustomers/>
      <InfoProduct/>
      <ProductDesription/>
      <ViewedByCustomer/>
      <RelatedProducts/>
      <Videos/>
      <SameCategoryBrands/>
      <LookingFor/>
    </>
  )
}

export default App
