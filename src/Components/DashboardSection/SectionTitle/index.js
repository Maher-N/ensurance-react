import styles from "./style.module.css";

import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <>
      {title && (
        <div className={styles.mb}>
          <img src="/sectionicon.svg" alt="section Icon" />
          <span className={styles.title}>{title}</span>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
