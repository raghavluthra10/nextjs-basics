import React from "react";
import getRestLayout from "@/layouts/RestLayout";
import Page from "@/components/Page";

function Ssg({ data }) {
  return (
    <Page>
      <h1 className="mb-2">
        This page shows how data is fetched in next js if we want Pre-render it
        using server side rendering.
      </h1>

      <h1 className="underline font-bold text-2xl mb-2">Data:</h1>

      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </Page>
  );
}

export default Ssg;

Ssg.getLayout = getRestLayout;

export async function getStaticProps() {
  const result = await fetch("http://localhost:3000/api/rest");
  const json = await result.json();
  const slicedData = json.slice(0, 20);

  return {
    props: {
      data: slicedData,
    },
  };
}
