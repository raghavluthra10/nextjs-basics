import Button from "@/components/Button";
import If from "@/components/If";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import TabLayout from "@/components/TabLayout";
import Link from "next/link";
import getRestLayout from "@/layouts/RestLayout";
import React from "react";

function Index() {
  return <div className="flex flex-col  ">index rest</div>;
}

export default Index;

Index.getLayout = getRestLayout;
