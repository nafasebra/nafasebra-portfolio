import Head from "next/head";
import React from "react";
import Navbar from "../components/common/Navbar";

function index() {
  return (
    <>
      <Head>
        <title>Nafas Ebrahimi</title>
        <meta name="keywords" content="nafasebra, nafasebrahimi, nafas ebrahimi, Nafas Ebrahimi, Frontend, Front-end, frontend dev, frontend developer" />
        <meta name="description" content="My name is Nafas Ebrahimi and a Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main></main>
    </>
  );
}

export default index;
