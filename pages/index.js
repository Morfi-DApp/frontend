import Head from "next/head";
import { useState } from "react";
import styles from "./styles/home.module.css";
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Morfi Home</title>
        <link rel="icon" href="/Morfi-Logo-white-text.png" />
      </Head>
      <ReactAudioPlayer
        src="./assets/mp3/godvoice.mp3"
        controls={false}
        autoPlay={true}
        loop        
      />
      <main className={styles.main}>
        <div className={styles.section1}>
          <img src="/Morfi-Logo-white-text.png" className={styles.icon} />
         <div>

         <button><a href="/login">Login</a></button> 
          </div>
        </div>
        {/* <div className={styles.section}>
          <h2><span>Project #2</span>Title of the Project</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className={styles.section}>
          <h2><span>Project #3</span>Title of the Project</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div> */}
      </main>
    </div>
  );
}
