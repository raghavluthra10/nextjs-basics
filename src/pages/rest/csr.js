import React from "react";
import getRestLayout from "@/layouts/RestLayout";
import Button from "@/components/Button";

function Csr() {
  const getData = async () => {
    try {
      const result = await fetch("/api/rest");
      const json = await result.json();
      console.log("result =>", json);
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
    <div className="p-4">
      <h1 className="mb-2">
        This page shows how data is fetched in next js if we want to do it on
        the client side.
      </h1>

      <h2 className="mb-2">
        If you are coming from React.js, you would be familiar with this way of
        fetching data.
      </h2>
      <Button onClick={handleClick}>Log data</Button>
    </div>
  );
}

export default Csr;

Csr.getLayout = getRestLayout;
