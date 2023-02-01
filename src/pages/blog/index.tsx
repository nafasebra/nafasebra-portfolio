import Head from "next/head";
import React from "react";
import Link from "next/link";

import Container from "@components/layout/Container";
import DarkSection from "@components/layout/DarkSection";
import Navbar from "@components/common/Navbar";
import Header from "@components/common/Header";
import ServiceCard from "@components/ui/ServiceCard";
import Skills from "@components/common/Skills";
import ProjectCard from "@components/ui/ProjectCard";
import BlogCard from "@components/ui/BlogCard";
import Footer from "@components/common/Footer";

import { Projects } from "@data/projects";
import { ServicesData } from "@data/services";

import { createClient } from "@supabase/supabase-js";

import { PostType } from "@/types/posts"

type PropType = {
  posts: PostType[];
};

function index(props: PropType) {
  return (
    <>
      <Head>
        <title>بلاگ | نفس ابراهیمی</title>
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

      <main>
        <section className="pt-[80px]">
          <Container>
            <h1 className="text-3xl font-bold text-white text-center">وبلاگ من</h1>
            <p className="text-center pt-5 text-gray-300 text-sm leading-[1.7rem]">
              اینجا درباره برنامه نویسی و سبک زندگی حرف میزنم! امیدوارم خوشتون بیاد :)
            </p>
          </Container>
        </section>
        <section className="py-36">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {props.posts.map((item) => (
                  <BlogCard
                    key={item.id}
                    date={item.created_at}
                    title={item.blog_title}
                    description={item.blog_description}
                  />
                ))}
            </div>
          </Container>
        </section>
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

  const { data } = await supbaseInit.from('blog').select('*');

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
