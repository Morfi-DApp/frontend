import Head from "next/head";
import { useState } from "react";
import styles from "./styles/nftpresentation.module.css";

export default function NftPresentation() {

  return (
    <div>
      <Head>
        <title>NFT Presentation</title>
        <link rel="icon" href="/Morfi-Logo-white-text.png" />
      </Head>

      <main className={styles.main}>
      <img src="/Morfi-Logo-white-text.png" className={styles.icon} />
        <h3>Dream NFT Presentation Page</h3>
      </main>
    </div>
  );
}
