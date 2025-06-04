import { useParams } from "react-router-dom";

import styles from "./ProductDetail.module.css";
import { toast } from "react-toastify";
import { useGetProduct } from "@/Api/Product/queries";
import { useGetCarts, usePostCart } from "@/Api/Cart/queries";

export default function ProductDetailPage() {
  const { id } = useParams();

  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
    error: productError,
  } = useGetProduct(id);
  const {
    data: cartItems = [],
    isLoading: isCartLoading,
    isError: isCartError,
  } = useGetCarts();

  const { mutate: postCart } = usePostCart();

  const handleAddToCart = () => {
    if (!product) return;

    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);

    if (isAlreadyInCart) {
      toast.error("이미 장바구니에 담긴 상품입니다.");
      return;
    }

    postCart(product, {
      onSuccess: () => {
        toast.success("장바구니에 추가되었습니다.");
      },
      onError: () => {
        toast.error("장바구니 추가 중 오류가 발생했습니다.");
      },
    });
  };

  if (isProductLoading || isCartLoading) return <div>로딩 중...</div>;
  if (isProductError) return <div>오류 발생 : {productError.message}</div>;
  if (isCartError) return <div>장바구니 로딩 실패</div>;

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
