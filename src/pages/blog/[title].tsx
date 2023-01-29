import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import Container from "@components/layout/Container";
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import BlogCard from "@components/ui/BlogCard";

import { createClient } from "@supabase/supabase-js"

import { PostType } from "@/types/posts"

type PropType = {
  selectedBlog: PostType;
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

      <main>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between py-20">
            <article className="w-full lg:w-[65%]">
              <h1 className="text-orange text-4xl font-bold">
                {selectedBlog?.blog_title}
              </h1>
              <p className="text-gray-400 py-5 text-sm">{selectedBlog?.created_at}</p>
              <div
                className="text-gray-300 text-sm py-5 leading-7"
                dangerouslySetInnerHTML={{
                  __html: selectedBlog?.blog_description || "lorem ipsom",
                }}
              ></div>
            </article>
            <aside className="w-full lg:w-[30%]">
              <h3 className="text-light text-lg leading-8 pb-7">
                بقیه مقاله های منتشر شده...
              </h3>
              {otherBlogs.map((item) => (
                <BlogCard
                  key={item.id}
                  date={item.created_at}
                  title={item.blog_title}
                  description={item.blog_description}
                />
              ))}
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

  const { data } = await supbaseInit.from('blog')
    .select('blog_title');

  const titles = data.map((item) => item.blog_title);
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

  const { data: selectedBlog } = await supbaseInit.from('blog')
    .select('*')
    .eq('blog_title', decodeURIComponent(title))

  const { data: otherBlogs } = await supbaseInit.from('blog')
    .select('*')
    .neq('blog_title', decodeURIComponent(title))

  console.log(selectedBlog);

  return {
    props: {
      selectedBlog: selectedBlog,
      otherBlogs: otherBlogs,
    },
  };
};

export default Blog;
