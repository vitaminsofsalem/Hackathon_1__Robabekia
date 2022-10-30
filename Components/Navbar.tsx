import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const provider = new GoogleAuthProvider();

  function handleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info
        setIsLoggedIn(true);
        setUser(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function handleSignout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(`${error} has occurred`);
      });
  }
  return (
    <nav className={styles.navbar} role="navigation">
      <ul className={styles.navbarNav}>
        <li className={styles.vertical__logo}>
          <Link href="/">
            <div>
              <span className={styles.vertical__text}>Robabekia</span>
            </div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#landing">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#product-sample">Products</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#how-it-works">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#contact-form">Contact</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <div className={styles.profile__photo_container}>
              <img
                className={styles.profile__photo}
                src={user?.photoURL}
                alt="profile-pic"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <Link
              href="#"
              className={`${styles.btn} ${styles.login}`}
              onClick={handleLogin}
            >
              <span>Log-in</span>
            </Link>
          )}
        </li>
        <li>
          <button
            className={`${styles.btn} ${styles.signup}`}
            onClick={isLoggedIn ? handleSignout : handleLogin}
          >
            {isLoggedIn ? "Sign out" : "Sign up"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
