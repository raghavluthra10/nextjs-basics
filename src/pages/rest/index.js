import Button from "@/components/Button";
import If from "@/components/If";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import TabLayout from "@/components/TabLayout";
import Link from "next/link";
import getRestLayout from "@/layouts/RestLayout";
import React from "react";

const tabOptions = {
  1: "ssr",
  2: "ssg",
  3: "csr",
};

function Index() {
  // const [activeTab, setActiveTab] = React.useState(tabOptions[1]);

  return <div className="flex flex-col  ">index rest</div>;
}

export default Index;

Index.getLayout = getRestLayout;
