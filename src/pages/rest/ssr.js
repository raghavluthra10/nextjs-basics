import React from "react";
import getRestLayout from "@/layouts/RestLayout";

function Ssr() {
  return (
    <div>
      <h1>SSR</h1>
    </div>
  );
}

export default Ssr;

Ssr.getLayout = getRestLayout;
