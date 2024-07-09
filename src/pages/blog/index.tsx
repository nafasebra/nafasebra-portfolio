import Head from "next/head";
import React, { useEffect, useState } from "react";

import Navbar from "@components/common/Navbar";
import BlogCard from "@components/ui/card/BlogCard";
import Footer from "@components/common/Footer";

import { PostType } from "@/types/posts";
import { supabaseInit } from "config/supabase";
import { changeStringToArray } from "@helper/index";
import SearchInput from "@components/feature/SearchInput";

type PropType = {
  posts: PostType[];
};

function index(props: PropType) {
  const [data, setData] = useState(props.posts);

  const handleSearch = (valueSearch: string) => {
    if (valueSearch === "" || valueSearch.length < 3) {
      setData(props.posts);
    } else {
      setData((data) => {
        return [
          ...data.filter((item) => item.blog_title.includes(valueSearch)),
        ];
      });
    }
  };

  return (
    <>
      <Head>
        <title>بلاگ | نفس ابراهیمی</title>
      </Head>

      <Navbar />

      <main className="py-16 space-y-16 container">
        <section className="space-y-16">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white text-center">بلاگ</h1>
            <p className="w-full max-w-[656px] mx-auto text-center text-gray-300 text-sm leading-[1.7rem]">
              به بلاگ من خوش اومدی. توی این صفحه لیستی از پست های من مشاهده
              میکنی و این لیست چند روزی یکبار آپدیت میشه. امیدوارم پست ها برای
              شما مفید واقع شده باشن :)
            </p>
          </div>
          <SearchInput handleSearch={handleSearch} />
        </section>
        <section>
          {data.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {data.map((item) => (
                <BlogCard
                  key={item.id}
                  date={item.created_at}
                  title={item.blog_title}
                  description={item.blog_description}
                  category={changeStringToArray(item.category)}
                />
              ))}
            </div>
          ) : (
            <div className="py-8 flex items-center flex-col gap-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 10l.01 0" />
                <path d="M15 10l.01 0" />
                <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                <path d="M17.566 17.606a2 2 0 1 0 2.897 .03l-1.463 -1.636l-1.434 1.606z" />
                <path d="M20.865 13.517a8.937 8.937 0 0 0 .135 -1.517a9 9 0 1 0 -9 9c.69 0 1.36 -.076 2 -.222" />
              </svg>
              <p className="py-6 text-center">
                گشتم نبود نگرد نیست :)
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await supabaseInit.from("blog").select("*");

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
