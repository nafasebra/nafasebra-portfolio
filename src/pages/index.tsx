import Head from "next/head";
import React from "react";
import Link from "next/link";

import Container from "@components/layout/Container";
import Navbar from "@components/common/Navbar";
import Header from "@components/common/Header";
import Footer from "@components/common/Footer";
import ServicesSection from "@components/common/HomeSection/ServicesSection";
import SkillsSection from "@components/common/HomeSection/SkillsSection";
import { createClient } from "@supabase/supabase-js";
import { PostType } from "@/types/posts"
import BlogSection from "@components/common/HomeSection/BlogSection";

type PropType = {
  posts: PostType[];
};

function index(props: PropType) {
  return (
    <>
      <Head>
        <title>نفس ابراهیمی</title>
        <meta
          name="keywords"
          content="nafasebra, nafasebrahimi, nafas ebrahimi, Nafas Ebrahimi, Frontend, Front-end, frontend dev, frontend developer, نفس ابراهیمی, برنامه نویس, برنامه نویس فرانت اند, فرانت اند, برنامه نویسی سمت کلاینت"
        />
        <meta
          name="description"
          content="سلام به همگی. بنده نفس ابراهیمی هستم و درحوزه برنامه نویسی فرانت اند کار میکنم. خوشحال میشم یک سری به سایتم بزنی. :)"
        />
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
  const supbaseInit = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );
  console.log(process.env.SUPABASE_URL)
  console.log(process.env.SUPABASE_KEY)

  const { data } = await supbaseInit.from('blog').select('*').limit(3);

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
