import React from "react";
import Link from "next/link";

const TabLayout = () => {
  return (
    <section className="w-52 bg-black text-white flex flex-col h-screen ">
      <Link
        href="/rest/ssr"
        className="p-4 border mb-2 w-11/12 flex flex-col items-center"
      >
        SSR
      </Link>
      <Link
        href="/rest/ssg"
        className="p-4 border mb-2 w-11/12 flex flex-col items-center"
      >
        SSG
      </Link>
      <Link
        href="/rest/csr"
        className="p-4 border mb-2 w-11/12 flex flex-col items-center"
      >
        CSR
      </Link>
    </section>
  );
};

export default TabLayout;
