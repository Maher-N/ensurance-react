import axios from "axios";
import { async } from "q";
import React, { useState } from "react";
import styles from './style.module.css'

const ArrowBtn = ({ children }) => {

  const [user, setName] = useState({
    name: "Sami",
    age: 31,
  });

  return (
    <>
      {children}
      <h1 className={styles.red}>{user.name}</h1>
      <h1>{user.age}</h1>

      <button
        onClick={() => {
          setName({ ...user, name: "Maher" });
        }}
      >
        ClickMe
      </button>
    </>
  );
};

export default ArrowBtn;
