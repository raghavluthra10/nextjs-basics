import React from "react";
import Link from "next/link";

const tabOptions = {
  1: "ssr",
  2: "ssg",
  3: "csr",
};

const TabLayout = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(tabOptions[1]);

  return (
    <section className="w-52 bg-black text-white flex flex-col h-screen">
      <Link href="/rest/ssr">SSR</Link>
      <Link href="/rest/ssg">SSG</Link>
      <Link href="/rest/csr">CSR</Link>
    </section>
  );
};

export default TabLayout;
