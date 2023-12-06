import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import Container from "@components/layout/Container";
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import BlogCard from "@components/ui/card/BlogCard";

import { createClient } from "@supabase/supabase-js";

import { PostType } from "@/types/posts";
import LikeButton from "@components/ui/button/LikeButton";

type PropType = {
  selectedBlog: PostType[];
  otherBlogs: PostType[];
};

interface IParams extends ParsedUrlQuery {
  title: string;
}

function Blog(props: PropType) {
  const { otherBlogs, selectedBlog } = props;

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

      <main className="pt-20">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-10 py-12 lg:py-20">
            <article className="w-full lg:w-[65%]">
              <h1 className="text-orange text-4xl font-bold">
                {selectedBlog[0]?.blog_title}
              </h1>
              <p className="text-gray-400 py-5 text-sm">
                {new Date(selectedBlog[0]?.created_at).toLocaleDateString(
                  "fa-IR",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </p>
              <div
                className="text-gray-300 text-sm py-5 leading-7"
                dangerouslySetInnerHTML={{
                  __html: selectedBlog[0]?.blog_description || "lorem ipsom",
                }}
              ></div>
              <div className="flex items-center justify-between">
                <p className="text-white">پست را پسندیدید؟</p>
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
                  />
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const supbaseInit = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );

  const { data } = await supbaseInit.from("blog").select("blog_title");

  const titles = data!.map((item) => item.blog_title) || ["hello world"];
  const paths = titles.map((title) => ({ params: { title } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const supbaseInit = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );

  const { title } = context.params as IParams;

  const { data: selectedBlog } = await supbaseInit
    .from("blog")
    .select("*")
    .eq("blog_title", decodeURIComponent(title));

  const { data: otherBlogs } = await supbaseInit
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
