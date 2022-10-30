import Image from "next/image";
import React, { useState } from "react";
import styles from "./Card.module.scss";
import Counter from "./Counter";

export default function Card(props: any) {
  const [count, setCount] = useState(0);

  function handleClick() {
    count !== 0
      ? alert("Items were added to the cart")
      : alert("No items added");
  }
  return (
    <div className={styles.grid__item}>
      <img className={styles.card__img} src={props.img} alt="" />
      <div className={styles.card__content_container}>
        <h1 className={styles.title}>{props.title}</h1>
        <span className={styles.price}>E£ {props.price}/KG</span>
        <div className={styles.card__footer}>
          <Counter setValue={setCount} />
          <button className={styles.btn__add_to_cart} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
