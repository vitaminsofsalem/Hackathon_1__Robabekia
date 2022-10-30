import { setDefaultResultOrder } from "dns";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../Components/Card";
import Counter from "../Components/Counter";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main id="landing" className={styles.container}>
      <Navbar />
      <div className={styles.section__container}>
        <section className={styles.left}>
          <div>
            <h1 className={styles.header}>
              Save Earth; <br /> One Bottle At A Time!
            </h1>

            <p className={styles.header__text}>
              Join us on our quest to make earth a cleaner planet <br />
              and get paid for it too.
            </p>

            <span className={styles.btn__grp}>
              <button
                className={styles.btn__action}
                onClick={() => window.open("https://www.google.com", "_blank")}
              >
                Get started
              </button>
              <Link
                className={styles.learn_more}
                href="https://en.wikipedia.org/wiki/Recycling"
              >
                Learn more
              </Link>
            </span>
          </div>
        </section>
        <section className={styles.right}>
          <Image
            src={require("/public/Recycling-bro.svg")}
            alt=""
            role="presentation"
          />
        </section>
      </div>

      <section id="product-sample" className={styles.product__sample}>
        <div className={styles.product_header}>
          <span className={styles.small_text}>BE THE CHANGE</span>
          <h1 className={styles.h_1}>
            CONTRIBUTE WITH ANY ITEMS YOU LIKE, <br /> WE WILL TAKE CARE OF THE
            REST
          </h1>
        </div>
        <div className={styles.grid__container}>
          <Card title="COCA-COLA® TIN CAN 350ML" price="3.75" img="coke.png" />
          <Card title="USED PLASTIC BOTTLES" price="2.78" img="large.png" />
          <Card title="SCRAPE METALS BITS" price="1527.45" img="iron.png" />
        </div>
      </section>

      <section id="how-it-works" className={styles.how__it__works}>
        <Image
          className={styles.works__img}
          src={require("/public/bottles.jpg")}
          alt=""
        />
        <div className={styles.works__text_container}>
          <h2 className={styles.works__h2}>RECYCLING</h2>
          <h1 className={styles.works__h1}>SAVING THE ENVIRONMENT</h1>
          <p className={styles.works__p}>
            The world is more polluted than ever before; we eat in plastic
            bottle, shop in plastic bags, and drink from plastic cups. 80% of
            all tin cans do not go to recycling. Fear not however as you can
            make a real change and make a profit while doing it too. Just sign
            up, add how much garbage you have at your disposal and we will send
            one to pick it up right away; free of charge
          </p>
        </div>
      </section>

      <section id="contact-form" className={styles.contact__form}>
        <div className={styles.contact__right}>
          <div className={styles.right__container}>
            <Form />
          </div>
        </div>
        <div className={styles.contact__left}>
          <Image
            className={styles.contact__img}
            src={require("../public/phone.jpg")}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
