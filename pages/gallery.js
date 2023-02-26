import Head from "next/head";
import { useState } from "react";
import styles from "./styles/gallery.module.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Gallery() {

  return (
    <div>
      <Head>
        <title>Gallery</title>
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
        <h3>User Dream Gallery Page</h3>
      </main>
    </div>
  );
}
