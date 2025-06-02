import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "@/Api/ProductApi";

import SortButton from "./Components/SortButton";

import styles from "./ProductList.module.css";
import ProductItem from "./Components/ProductItem";

export default function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [sortType, setSortType] = useState("default");
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

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortProducts = (products, type) => {
    const sorted = [...products];
    switch (type) {
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "title-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  };

  const sortedList = sortProducts(productList, sortType);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 : {error.message}</p>;
  return (
    <div>
      <div className={styles.sortWrapper}>
        <SortButton sortType={sortType} onChange={handleSortChange} />
      </div>
      <ul className={styles.ul}>
        {sortedList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
