import Navbar from "@/components/Navbar";
import React from "react";
import TabLayout from "@/components/TabLayout";
import getRestLayout from "@/layouts/RestLayout";

function Csr() {
  return (
    <div>
      <h1>Csr</h1>
    </div>
  );
}

export default Csr;

Csr.getLayout = getRestLayout;
