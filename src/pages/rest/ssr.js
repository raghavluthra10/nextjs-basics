import Page from "@/components/Page";
import React from "react";

function ssr({ json }) {
  console.log(json);
  return <Page>result</Page>;
}

export default ssr;

export async function getServerSideProps() {
  try {
    const result = await fetch("http://localhost:3000/api/hello");
    const json = await result.json();
    console.log(json);

    return {
      props: {
        json,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}
