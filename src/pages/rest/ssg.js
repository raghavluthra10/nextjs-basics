import React from "react";
import getRestLayout from "@/layouts/RestLayout";

function Ssg() {
  return (
    <div>
      <h1>SSG</h1>
    </div>
  );
}

export default Ssg;
Ssg.getLayout = getRestLayout;
