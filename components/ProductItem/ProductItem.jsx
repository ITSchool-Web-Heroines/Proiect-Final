import React, { useContext } from "react";
import styles from "./productitem.module.css";
import { Store } from "../../info/Store";
import Image from "next/future/image";

export default function ProductItem({ product }) {
  const { state, send } = useContext(Store);
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    send({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.name}
        className={styles.product_img}
        width={500}
        height={500}
      />
      <div className={styles.set}>
        <p className={styles.product_price}>{product.price} RON</p>
        <div className={styles.name_add}>
          <h2 className={styles.product_name}>{product.name}</h2>
          <button className={styles.btn} onClick={addToCartHandler}>
            Adaugă în coș
          </button>
        </div>
      </div>
    </div>
  );
}
