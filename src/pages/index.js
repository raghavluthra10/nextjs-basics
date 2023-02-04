import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   return (
      <Layout>
         <Head>
            <title>hello</title>
         </Head>
         <h1>home</h1>
      </Layout>
   );
}
