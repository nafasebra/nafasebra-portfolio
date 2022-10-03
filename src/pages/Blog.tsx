import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../components/common/Navbar";
import Container from "../components/layout/Container";
import Footer from "../components/common/Footer";
import { Posts, PostType } from "../data/post";

function Blog() {
  const { query } = useRouter();
  const [selectedItem, setSelectedItem] = useState<PostType[]>([]);

  useEffect(() => {
    let selectedBlog = Posts.filter(
      (item) => item.title === decodeURIComponent(String(query.title))
    );
    setSelectedItem(selectedBlog);
  }, []);

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Navbar />
      </Container>

      <main>
        <Container>
          <div className="flex flex-col md:flex-row justify-between py-20">
            <article>
              <h1 className="text-orange text-4xl">{selectedItem[0]?.title}</h1>
              <p className="text-gray-400 py-2 text-sm">
                {selectedItem[0]?.date}
              </p>
              <div
                className="text-light text-lg py-5"
                dangerouslySetInnerHTML={{ __html: selectedItem[0]?.body }}
              ></div>
            </article>
            <aside></aside>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default Blog;
