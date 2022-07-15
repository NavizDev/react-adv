import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
  id:'1',
  title:'Coffee Mug - Tingo',
  img:'/coffee-mug.png'
}

const product2 = {
  id:'1',
  title:'Coffee Mug - Tingo',
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shoping Store</h1>
        <hr />
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          <ProductCard 
            product={product2}
            className="bg-dark"
            >
            <ProductCard.Image className="custom-img" img2="adsad"/>
            <ProductCard.Title className="text-white" active="aadsa"/>
            <ProductCard.Buttons className="custom-bottoms" />
          </ProductCard>
          <ProductCard 
              product={product}
              className="bg-dark"
            >
            <ProductImage className="custom-img" img2="asdad"/>
            <ProductTitle className="text-white" active="aadsa"/>
            <ProductButtons className="custom-bottoms"/>
          </ProductCard>
          <ProductCard 
              product={product}
              style={{backgroundColor:"red"}}
            >
            <ProductImage style={{boxShadow:'10px 10px 10px #111'}}/>
            <ProductTitle style={{color:'#fff'}}/>
            <ProductButtons style={{
                display:'flex',
                justifyContent:'end'
              }}
            />
          </ProductCard>
        </div>
    </div>
  )
}
