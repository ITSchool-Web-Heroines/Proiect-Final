import React from "react";
import Head from "next/head";

import Layout from "../components/Layout/Layout";
import HeaderCarousel from "../components/HeaderCarousel/HeaderCarousel";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import FavProduct from "../components/FavProduct/FavProduct";

export default function Home() {
  return (
    <Layout title="Acasa">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div>
        <HeaderCarousel />
        <FeaturedProducts />
        <FavProduct />
      </div>
    </Layout>
  );
}
