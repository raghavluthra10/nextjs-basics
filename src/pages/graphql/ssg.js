import React from "react";
import getGraphqlLayout from "@/layouts/GraphqlLayout";
import Page from "@/components/Page";
import client from "apollo-client";
import { gql } from "@apollo/client";

function Ssg({ data }) {
  console.log("ssr graphql =>", data);
  return (
    <Page>
      <h1 className="mb-2">
        This page shows how data is fetched in next js if we want Pre-render it
        using server side rendering.
      </h1>

      <h1 className="underline font-bold text-2xl mb-2">Data:</h1>

      {data.users.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </Page>
  );
}

export default Ssg;

Ssg.getLayout = getGraphqlLayout;

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetUsers {
        users {
          title
        }
      }
    `,
  });

  return {
    props: {
      data: data,
    },
  };
}
