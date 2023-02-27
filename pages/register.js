import Head from "next/head";
import { useState } from "react";
import styles from "./styles/register.module.css";
import ReactAudioPlayer from 'react-audio-player';
import Link from "next/link";

export default function Register() {
  const [userNameInput,setUserName] = useState("");
  const [userPasswordInput, setPassword] = useState("");
  const [userConfirmPasswordInput, setConfirmPassword] = useState("");
  const [result, setResult] = useState();
  const [url,setUrl] = useState("")

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userName:userNameInput,userPassword:userPasswordInput,userConfrimPassword:userConfirmPasswordInput}),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setUrl(data.url);
      console.log(data)
      
      setUserName("");
      setPassword("");
      setConfirmPassword("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Register</title>
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
        <h3>Register</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={userNameInput}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            name="userPassword"
            placeholder="Password"
            value={userPasswordInput}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            name="userConfirmPassword"
            placeholder="Confirm Password"
            value={userConfirmPasswordInput}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />          
          <Link href="/dreamForm"><input type="submit" value="Register" /></Link>
        </form>
        <div className={styles.result}>{result}</div>
        <div className={styles.images}>
          <img src={url}/>
        </div>
      </main>
    </div>
  );
}
