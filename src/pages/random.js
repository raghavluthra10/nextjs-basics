import Layout from "@/components/Layout";
import React from "react";

function random() {
  const getMe = async () => {
    console.log("getMe =>");
    try {
      const result = await fetch("http://localhost:3000/api/hello");
      const jsonData = await result.json();

      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <h1>Random</h1>
      <button onClick={getMe}>Hello</button>
    </Layout>
  );
}

export default random;
