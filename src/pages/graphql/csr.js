import React from "react";
import getGraphqlLayout from "@/layouts/GraphqlLayout";
import Button from "@/components/Button";
import If from "@/components/If";
import Page from "@/components/Page";
import client from "apollo-client";
import { gql } from "@apollo/client";

function Csr() {
  const [data, setData] = React.useState([]);
  console.log("data =>", data);
  const getData = async () => {
    try {
      const { data } = await client.query({
        query: gql`
          query GetUsers {
            users {
              title
            }
          }
        `,
      });
      setData(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleClick = async () => {
    console.log("handle click");
  };

  return (
    <Page>
      <h1 className="mb-2">
        This page shows how data is fetched in next js if we want to do it on
        the client side.
      </h1>

      <h2 className="mb-2">
        If you are coming from React.js, you would be familiar with this way of
        fetching data.
      </h2>
      <Button onClick={handleClick}>Log data</Button>

      <If condition={data.length > 0}>
        {data.map((d) => (
          <div key={d.id}>{d.title}</div>
        ))}
      </If>
    </Page>
  );
}

export default Csr;

Csr.getLayout = getGraphqlLayout;
