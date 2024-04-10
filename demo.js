import MainApp from "./components/MainApp";
import ServerComp from "./components/ServerComp";
import RestApp from "./Rest/RestApp";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

export default async function Home() {
  let products = await productList();
  console.log(products);
  return (
    <main>
      <div>
        <h2>Products</h2>
        {products.map((item) => (
          <div>
            <h3>
              Name :{item.title} ---{item.price}
            </h3>
          </div>
        ))}
      </div>
    </main>
  );
}
