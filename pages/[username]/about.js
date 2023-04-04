import { useSelector } from "react-redux";

import Head from "next/head";

import Layout from "../../components/Layout" ;
import Rightbar from "../../components/rightbar/username/Rightbar" ;
import Main from "../../components/main/username/about/Main" ;


export default function () {
  const {name} = useSelector((state) => state.user)

  return (
    <>
      <Head>
        <title> About - {name} </title>
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
