import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Page from "@/components/Page";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <React.Fragment>
      <Page className="mt-6">
        <h1 className="text-xl font-bold">
          Go to either{" "}
          <Link href="/rest" className="underline">
            Rest
          </Link>{" "}
          or{" "}
          <Link href="/graphql" className="underline">
            Graphql
          </Link>{" "}
          to see how data fetching works in nextjs
        </h1>
      </Page>
    </React.Fragment>
  );
}
