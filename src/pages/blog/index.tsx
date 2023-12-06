import Head from "next/head";
import React from "react";

import Container from "@components/layout/Container";
import Navbar from "@components/common/Navbar";
import BlogCard from "@components/ui/card/BlogCard";
import Footer from "@components/common/Footer";

import { PostType } from "@/types/posts"
import { supabaseInit } from "config/supabase";

type PropType = {
  posts: PostType[];
};

function index(props: PropType) {
  return (
    <>
      <Head>
        <title>بلاگ | نفس ابراهیمی</title>
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
               {props?.posts?.map((item) => (
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
  const { data } = await supabaseInit.from('blog').select('*');

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
