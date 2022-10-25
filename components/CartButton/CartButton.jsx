import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../info/Store";
import styles from "./cartButton.module.css";

import Image from "next/future/image";
import Cart_icon from "../../images/cart.png";

export default function CartButton() {
  const { state, send } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, b) => a + b.quantity, 0));
  }, [cart.cartItems]);

  return (
    <div className={styles.btn}>
      <Image src={Cart_icon} className={styles.cart_icon} />
      <span className={styles.nr_items}>{cartItemsCount}</span>
    </div>
  );
}
