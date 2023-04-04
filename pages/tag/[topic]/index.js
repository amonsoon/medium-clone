import { useRouter } from "next/router";

import Head from "next/head";

import Layout from "../../../components/Layout";
import Main from "../../../components/main/tag/Main";
import Rightbar from "../../../components/rightbar/tag/Rightbar"

export default function () {
  const router = useRouter() ;

  const {topic} = router.query ;

  return (
    <>
      <Head>
        <title> The most insightful stories about {topic} - Clone </title>
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
