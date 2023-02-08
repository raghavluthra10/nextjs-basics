import React from "react";
import getRestLayout from "@/layouts/RestLayout";
import Button from "@/components/Button";
import If from "@/components/If";
import Page from "@/components/Page";

function Csr() {
  const [data, setData] = React.useState([]);
  console.log("data =>", data);
  const getData = async () => {
    try {
      const result = await fetch("/api/rest");
      const json = await result.json();
      setData(json.slice(0, 20));
      return json;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleClick = async () => {
    getData();
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

Csr.getLayout = getRestLayout;
