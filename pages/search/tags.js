import { useEffect, useState } from "react";

import Head from "next/head";

import Layout from "../../components/Layout";
import Main from "../../components/main/search/topics/Main";
import Rightbar from "../../components/rightbar/search/Rightbar"

export default function () {
  return (
    <>
      <Head>
        <title> Medium </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Main />
        <Rightbar />
      </Layout>
    </>
  );
}
