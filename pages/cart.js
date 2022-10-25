import React, { useContext } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Store } from "../info/Store";
import styles from "../styles/cart.module.css";
import Layout from "../components/Layout/Layout";

import Image from "next/future/image";
import Remove from "../images/cancel.svg";

function CartPage() {
  const router = useRouter();
  const { state, send } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (product) => {
    send({ type: "CART_REMOVE_ITEM", payload: product });
  };
  return (
    <Layout title="Cos">
      <h1 className={styles.title}>Coș de cumpărături</h1>
      {cartItems.length === 0 ? (
        <div className={styles.empty}>
          Coșul este gol!
          <Link href="/produse" className={styles.link}>
            <a className={styles.link}> Descoperă produsele noastre </a>
          </Link>
        </div>
      ) : (
        <div>
          {cartItems.map((product) => (
            <div className={styles.list} key={product.id}>
              <div className={styles.img_text} key={product.id}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className={styles.img}
                  key={product.id}
                />
                <p className={styles.name}>
                  {product.name} key={product.id}
                </p>
              </div>
              <p className={styles.quantity} key={product.id}>
                {product.quantity} buc
              </p>
              <div className={styles.price_remove} key={product.id}>
                <p className={styles.price_style} key={product.id}>
                  {cartItems.reduce(() => product.quantity * product.price, 0)}{" "}
                  RON
                </p>
                <button
                  className={styles.remove}
                  onClick={() => removeItemHandler(product)}
                  key={product.id}
                >
                  <Image src={Remove} alt="btn_remove" key={product.id} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={styles.subtotal_btn}>
        <div className={styles.subtotal}>
          Total : {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)} RON
        </div>
        <button onClick={() => router.push("/comanda")} className={styles.btn}>
          Finalizează comanda
        </button>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartPage), { ssr: false });
