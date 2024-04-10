
'use client'

 
export default function ProductPrice({price}) {
  return (
    <div>
        <button onClick={()=> alert(price)}>Show Price</button>
    </div>
  )
}




-------------

  "use client";

import ProductPrice from "./ProductPrice";

function Product({pdata}) {
  return (
    <div>
       {pdata.map((data) => (
        <div>{data.title}
        <ProductPrice price={data.price}/>
        </div>
        
       ))}

    </div>
  );
}

export default Product;


----------


  import MainApp from "./components/MainApp";
import Product from "./components/Products";
import ServerComp from "./components/ServerComp";
import RestApp from "./Rest/RestApp";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Home() {
  let products = await productList();
   return (
    <main>
      <div>
        <h2>Products</h2>
        <Product pdata={products} />
     
      </div>
    </main>
  );
}
