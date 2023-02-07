import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center bg-black text-white p-4 ">
      <div>
        <Link href="/" className="mr-6">
          Home
        </Link>
        <Link className="mr-6" href="/rest">
          Rest Api
        </Link>

        <Link href="/graphql">Graphql</Link>
      </div>
    </nav>
  );
}

export default Navbar;
