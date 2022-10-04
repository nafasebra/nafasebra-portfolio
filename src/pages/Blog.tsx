import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../components/common/Navbar";
import Container from "../components/layout/Container";
import Footer from "../components/common/Footer";
import { Posts, PostType } from "../data/post";
import BlogCard from "../components/ui/BlogCard";

function Blog() {
  const { query } = useRouter();
  const [selectedItem, setSelectedItem] = useState<PostType[]>([]);
  const [otherListItem, setOtherListItem] = useState<PostType[]>([]);

  useEffect(() => {
    setSelectedItem([
      ...Posts.filter(
        (item) => item.title === decodeURIComponent(String(query.title))
      ),
    ]);
    setOtherListItem([
      ...Posts.filter(
        (item) => item.title !== decodeURIComponent(String(query.title))
      ),
    ]);
  }, [query]);

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
                {selectedItem[0]?.title}
              </h1>
              <p className="text-gray-400 py-5 text-sm">
                {selectedItem[0]?.date}
              </p>
              <div
                className="text-gray-300 text-sm py-5 leading-7"
                dangerouslySetInnerHTML={{ __html: selectedItem[0]?.body }}
              ></div>
            </article>
            <aside className="w-full lg:w-[30%]">
              <h3 className="text-light text-lg leading-8 pb-7">
                بقیه مقاله های منتشر شده...
              </h3>
              {otherListItem?.map((item) => (
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

export default Blog;
