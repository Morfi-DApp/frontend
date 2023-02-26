import Head from "next/head";
import { useState } from "react";
import styles from "./styles/sell.module.css";

export default function Sell() {

  return (
    <div>
      <Head>
        <title>Sell</title>
        <link rel="icon" href="/Morfi-Logo-white-text.png" />
      </Head>

      <main className={styles.main}>
      <img src="/Morfi-Logo-white-text.png" className={styles.icon} />
        <h3>Morfi Dream Sell Page</h3>
      </main>
    </div>
  );
}
