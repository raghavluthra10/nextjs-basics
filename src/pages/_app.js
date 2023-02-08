import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import React from "react";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return (
      <React.Fragment>
        <Navbar />
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
