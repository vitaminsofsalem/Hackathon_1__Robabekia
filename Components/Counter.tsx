import React, { useState } from "react";
import styles from "./Counter.module.scss";

export default function Counter(props: any) {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    props.setValue(count + 1);
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
      props.setValue(count - 1);
    }
  }
  return (
    <div className={styles.container}>
      <span className={styles.decrement} onClick={decrement}>
        -
      </span>
      {count}
      <span className={styles.increment} onClick={increment}>
        +
      </span>
    </div>
  );
}
