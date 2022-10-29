import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useState } from "react"; //react gets installed by default with next.js
import { ethers } from "ethers"; //need to "yarn add ethers aswell"

//connect to metamask
//execute a function

//when working with nextjs we have to do this typeof window.ethereum !== "undefined" inside the component (instead of here outside), because nextjs made it so that "window"
//doesnt exist, it doesnt recognize "window".
//but there are some ways that we can actually get around it, and one of those is putting it into the component (which means inside Home() I believe)

export default function Home() {
  //this time we want our button to only exist if we're not connected, so we're gonna add something here called "useState". we need to import it from react
  //useState is different from just "let isConnected = false" because it keeps the state between renders
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState();
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        let connectedProvider = new ethers.providers.Web3Provider(
          window.ethereum
        );
        setSigner(connectedProvider.getSigner()); //weird syntax, whats setSigner()?
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute() {}

  //we added a () after return, it just had <div></div>, might be useful dunno
  //its actually pretty simple with {isConnected ? "We are connected" : <button onClick={() => connect()}>Connect!</button>}
  //but the auto format makes it weird and adds some (), but its simple as above. if isConnected is true, it types "We are connected", if not it adds a button
  return (
    <div className={styles.container}>
      Hello Frogs!
      {isConnected ? (
        " We are connected!"
      ) : (
        <button onClick={() => connect()}>Connect!</button>
      )}
    </div>
  );
}
