import Head from "next/head";

import Navbar from "../../components/common/Navbar";
import Container from "../../components/layout/Container";
import Footer from "../../components/common/Footer";
import { Posts, PostType } from "../../data/post";
import BlogCard from "../../components/ui/BlogCard";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface IContextStaticProps extends ParsedUrlQuery {
  title: string;
}

type PropType = {
  selectedBlog: PostType[];
  otherBlogs: PostType[];
};

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
          content="سلام به همگی. بنده نفس ابراهیمی هستم و درحوزه برنامه نویسی فرانت اند کار میکنم. خوشحال میشم یک سری به سایتم بزنی. راستی خیلی اتفاقا قراره اینجا بیوفته :)"
        />
      </Head>

      <Container>
        <Navbar />
      </Container>

      <main>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between py-20">
            <article className="w-full lg:w-[65%]">
              <h1 className="text-orange text-4xl font-bold">
                {selectedBlog[0]?.title}
              </h1>
              <p className="text-gray-400 py-5 text-sm">
                {selectedBlog[0]?.date}
              </p>
              <div
                className="text-gray-300 text-sm py-5 leading-7"
                dangerouslySetInnerHTML={{ __html: selectedBlog[0]?.body }}
              ></div>
            </article>
            <aside className="w-full lg:w-[30%]">
              <h3 className="text-light text-lg leading-8 pb-7">
                بقیه مقاله های منتشر شده...
              </h3>
              {otherBlogs?.map((item) => (
                <BlogCard
                  key={item.id}
                  date={item.date}
                  title={item.title}
                  description={item.body}
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

export const getServerSideProps: GetStaticProps = async (context) => {
  const { title } = context.params as IContextStaticProps;
  const selectedBlog = Posts.filter(
    (item) => item.title === decodeURIComponent(title)
  );
  const otherBlogs = Posts.filter(
    (item) => item.title !== decodeURIComponent(title)
  );

  return {
    props: {
      selectedBlog: selectedBlog,
      otherBlogs: otherBlogs,
    },
  };
};

export default Blog;
