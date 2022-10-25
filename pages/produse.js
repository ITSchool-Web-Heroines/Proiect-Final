import React from "react";
import Layout from "../components/Layout/Layout";
import ProductItem from "../components/ProductItem/ProductItem";
import data from "../info/data";
import styles from "../styles/products.module.css";
import HeaderProducts from "../components/HeaderProducts/HeaderProducts";

export default function produse() {
  return (
    <Layout title="Produse">
      <HeaderProducts />
      <div className={styles.display}>
        {data.products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
