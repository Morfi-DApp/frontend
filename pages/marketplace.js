import Head from "next/head";
import { useState } from "react";
import styles from "./styles/marketplace.module.css";
import ReactAudioPlayer from 'react-audio-player';

export default function MarketPlace() {

  return (
    <div>
      <Head>
        <title>Marketplace</title>
        <link rel="icon" href="/Morfi-Logo-white-text.png" />
      </Head>
      <ReactAudioPlayer
        src="./assets/mp3/godvoice.mp3"
        controls={false}
        autoPlay={true}
        loop        
      />
      <main className={styles.main}>
      <img src="/Morfi-Logo-white-text.png" className={styles.icon} />
        <h3>Morfi Dreamplace Marketplace Page</h3>
      </main>
    </div>
  );
}
