import Head from "next/head";
import React from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Container from "../components/layout/Container";


function index() {
  return (
    <>
      <Head>
        <title>Nafas Ebrahimi</title>
        <meta name="keywords" content="nafasebra, nafasebrahimi, nafas ebrahimi, Nafas Ebrahimi, Frontend, Front-end, frontend dev, frontend developer" />
        <meta name="description" content="My name is Nafas Ebrahimi and a Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar />
        <Header />
      </Container>
      
      <main></main>
    </>
  );
}

export default index;
