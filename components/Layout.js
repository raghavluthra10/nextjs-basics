import React from "react";
import styles from "@/styles/Home.module.css";

function Layout({ children }) {
   return <div className={styles.pageLayout}>{children}</div>;
}

export default Layout;
