import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">home</h1>
    </Layout>
  );
}
