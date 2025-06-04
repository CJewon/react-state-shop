import { getProduct } from "@/Api/Product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./ProductDetail.module.css";
import { getCarts, postCarts } from "@/Api/Cart";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setCarts } from "@/features/cart/cartSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const initialized = useSelector((state) => state.cart.initialized);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initialized) {
      (async () => {
        try {
          const carts = await getCarts();
          dispatch(setCarts(carts));
        } catch (err) {
          console.error("장바구니 불러오기 실패:", err);
        }
      })();
    }
  }, [initialized, dispatch]);

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

  console.log(cartItems);
  const handleAddToCart = async () => {
    if (!product) return;

    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (isAlreadyInCart) {
      toast.error("이미 장바구니에 담긴 상품입니다.");
      return;
    }

    try {
      await postCarts(product);
      dispatch(addToCart(product));
      toast.success("장바구니에 추가되었습니다.");
    } catch (error) {
      toast.error("장바구니 추가 중 오류가 발생했습니다", error);
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
