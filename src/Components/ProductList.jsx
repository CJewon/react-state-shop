import React, { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../Api/ProductApi";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const products = await getProducts();
        setProductList(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 : {error.message}</p>;
  return (
    <div>
      {productList.map((product) => (
        <li key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.description}></img>
          <p>{product.price}</p>
        </li>
      ))}
    </div>
  );
}
