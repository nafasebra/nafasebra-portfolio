import Head from "next/head";
import React from "react";

import Container from "@components/layout/Container";
import Navbar from "@components/common/Navbar";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import ServicesSection from "@components/common/HomeSection/ServicesSection";
import SkillsSection from "@components/common/HomeSection/SkillsSection";
import { PostType } from "@/types/posts"
import BlogSection from "@components/common/HomeSection/BlogSection";
import { supabaseInit } from "config/supabase"

type PropType = {
  posts: PostType[];
};

function index(props: PropType) {
  return (
    <>
      <Head>
        <title>نفس ابراهیمی</title>
      </Head>

      <Navbar />

      <Container>
        <Header />
      </Container>

      <main>
        <ServicesSection />
        <SkillsSection />
        <BlogSection data={props?.posts} />
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await supabaseInit.from('blog').select('*').limit(3);

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
