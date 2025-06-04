import { useState } from "react";

import SortButton from "./Components/SortButton";

import styles from "./ProductList.module.css";
import ProductItem from "./Components/ProductItem";
import { useGetProducts } from "@/Api/Product/queries";

export default function ProductListPage() {
  const [sortType, setSortType] = useState("default");

  const {
    data: productList = [],
    isLoading,
    isError,
    error,
  } = useGetProducts();

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

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 : {error.message}</p>;
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
