import { useEffect, useState } from "react";
import Product from "./Product";


export default function ProductList() {
  //Start Api
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((db) => setProducts(db))
  }

  const getProductsIncategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((db) => setCategories(db))
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, [])
  //End Api

  return (
    <>
      <h2 className="text-center p-3" id="Product" style={{ color: "white", paddingTop: "30px" }}>Our Products</h2>
      <div className="container">
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0 0 0"
        }}>
          <button
            style={{
              marginRight: "10px"
            }}
            onClick={() => { getProducts() }}
            className="btn btn-danger" >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                style={{
                  marginRight: "10px"
                }}
                key={cat} onClick={() => { getProductsIncategory(cat) }}
                className="btn btn-success" >
                {cat}
              </button>
            );

          })}
        </div>
        <div className="row g-3" >
          {products.map((product) => {
            return (
              <div className="col-12 col-md-6 col-lg-3" key={product.id}>
                <Product product={product} showButton={true} showdescription={false} />
              </div>
            )
          })}
        </div>
      </div >
    </>
  );
}

