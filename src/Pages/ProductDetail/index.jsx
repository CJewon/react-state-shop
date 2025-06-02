import { getProduct } from "@/Api/ProductApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductDetail.module.css";
import { getCarts, postCarts } from "@/Api/CartApi";
import { toast } from "react-toastify";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function productData() {
      try {
        const productData = await getProduct(id);
        setProduct(productData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    productData();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const cartItems = await getCarts();
      const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

      if (isAlreadyInCart) {
        toast.error("이미 장바구니에 담긴 상품입니다.");
        return;
      }

      await postCarts();
      toast.success("장바구니에 추가되었습니다!");
    } catch (error) {
      toast.error("Error : ", error);
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>오류 발생 : {error.message}</div>;
  return (
    <div className={styles.productContainer}>
      <img
        src={product.image}
        alt={product.description}
        className={styles.image}
      />
      <div className={styles.productExplainContainer}>
        <h2>{product.title}</h2>
        <p className={styles.descriptionFont}>{product.description}</p>
        <p>가격 : {product.price}$</p>
        <p>평점 : {product.rating.rate}</p>
        <p>조회수 : {product.rating.count}</p>
        <button onClick={handleAddToCart} className={styles.cartButton}>
          장바구니 담기
        </button>
      </div>
    </div>
  );
}
