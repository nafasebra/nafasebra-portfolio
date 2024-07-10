import Head from "next/head";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

import { supabaseInit } from "config/supabase";

import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import BlogCard from "@components/ui/card/BlogCard";
import LikeButton from "@components/ui/button/LikeButton";

import { PostType } from "@/types/posts";
import { changeStringToArray } from "@helper/index";
import Markdown from "react-markdown";

type PropType = {
  selectedBlog: PostType[];
  otherBlogs: PostType[];
};

interface IParams extends ParsedUrlQuery {
  title: string;
}

function Blog(props: PropType) {
  const { otherBlogs, selectedBlog } = props;

  console.log(selectedBlog[0].category)

  return (
    <>
      <Head>
        <title> {selectedBlog[0]?.blog_title} | نفس ابراهیمی </title>
        <meta name="keywords" content={selectedBlog[0]?.meta_keywords || ""} />
        <meta
          name="description"
          content={selectedBlog[0]?.meta_description || ""}
        />
      </Head>

      <Navbar />

      <main className="py-16 container">
        <section className="flex flex-col lg:flex-row justify-between gap-10 py-12 lg:py-20">
          <article className="w-full lg:w-[65%] space-y-5">
            <h1 className="text-orange text-4xl font-bold">
              {selectedBlog[0]?.blog_title}
            </h1>
            <p className="text-gray-400 text-sm">
              {new Date(selectedBlog[0]?.created_at).toLocaleDateString(
                "fa-IR",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </p>
            <div className="text-gray-300 text-sm leading-7">
              <Markdown>
                {selectedBlog[0]?.blog_description || "lorem ipsom"}
              </Markdown>
            </div>
            <div className="flex flex-wrap gap-2">
              {changeStringToArray(selectedBlog[0].category).map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg text-gray-300 px-3 py-1 text-[0.75rem]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
            <div className="flex items-center py-5 justify-between">
              <LikeButton />
            </div>
          </article>
          <hr className="block lg:hidden" />
          <aside className="w-full lg:w-[30%] space-y-7">
            <h3 className="text-light text-xl font-bold">
              بقیه مقاله های منتشر شده...
            </h3>
            <div className="flex flex-col gap-6">
              {otherBlogs.map((item) => (
                <BlogCard
                  key={item.id}
                  date={item.created_at}
                  title={item.blog_title}
                  description={item.blog_description}
                  category={changeStringToArray(item.category)}
                />
              ))}
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { title } = context.params as IParams;

  const { data: selectedBlog } = await supabaseInit
    .from("blog")
    .select("*")
    .eq("blog_title", decodeURIComponent(title));

  const { data: otherBlogs } = await supabaseInit
    .from("blog")
    .select("*")
    .neq("blog_title", decodeURIComponent(title));

  return {
    props: {
      selectedBlog: selectedBlog,
      otherBlogs: otherBlogs,
    },
  };
};

export default Blog;
