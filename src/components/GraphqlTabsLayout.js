import React from "react";
import Link from "next/link";

const GraphqlTabsLayout = () => {
  return (
    <section className="w-32 items-center bg-black text-white flex flex-col h-screen">
      <Link
        href="/graphql/ssr"
        className="p-4 border mb-2 w-11/12 flex flex-col items-center"
      >
        SSR
      </Link>
      <Link
        href="/graphql/ssg"
        className="p-4 border mb-2 w-11/12 flex flex-col items-center"
      >
        SSG
      </Link>
      <Link
        href="/graphql/csr"
        className="p-4 border mb-2 w-11/12 flex flex-col items-center"
      >
        CSR
      </Link>
    </section>
  );
};

export default GraphqlTabsLayout;
