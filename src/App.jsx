import './App.css'
import ProductCard from './assets/components/productCard/ProductCard'
import productOne from './assets/img/img1.jpg'
import productTwo from './assets/img/img2.avif'
import productThree from './assets/img/img3.webp'

function App() {

  return (
    <>
     <div id="products">
      <ProductCard
      title="Cocooil"
      price="30$"
      picture={productOne}
      />
      <ProductCard
      title="Irgendwas"
      price="60$"
      picture={productTwo}
      />
      <ProductCard
      title="Was was"
      price="20$"
      picture={productThree}
      />
      </div>
    </>
  )
}

export default App
