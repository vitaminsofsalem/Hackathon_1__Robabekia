import React from "react";
import styles from "./Form.module.scss";
import { useFormik } from "formik";

export default function Form() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values: any, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <>
      <div className={styles.header__container}>
        <h2 className={styles.small__header}>CONTACT US</h2>

        <h1 className={styles.header}>
          LET US GET IN TOUCH AND <br /> MAKE EARTH A BETTER PLACE
        </h1>
      </div>

      <form className={styles.contact__form} onSubmit={formik.handleSubmit}>
        <div className={styles.contact__label}>
          <label htmlFor="firstName">First Name</label>
          <input
            className={styles.contact__input}
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>

        <div className={styles.contact__label}>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={styles.contact__input}
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>

        <div className={styles.contact__label}>
          <label htmlFor="email">Email Address</label>
          <input
            className={styles.contact__input}
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <button className={styles.btn__submit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
