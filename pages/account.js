import Head from "next/head";
import { useState } from "react";
import styles from "./styles/account.module.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Account() {

  return (
    <div>
      <Head>
        <title>Account</title>
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
        <h3>User Account Page</h3>
      </main>
    </div>
  );
}
