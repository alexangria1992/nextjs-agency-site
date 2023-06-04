import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <AboutUs />
    </div>
  );
};

export default Home;
