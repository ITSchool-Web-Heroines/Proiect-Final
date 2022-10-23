import Head from 'next/head'
import Layout from '../components/Layout'
import Products from '../components/Products'
import css from '../styles/Home.module.css'
import React from "react";

export default function Goods() {
  return (
    <Layout>

       <div className={css.container}>
      <Head>
        <title>Rhevox</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {/* body */}
      <main>
        <Products/>
      </main>
    </div>

    </Layout>
   
  )
}
