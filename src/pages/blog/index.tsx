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
            <p className="text-white py-6 text-center">
              اینجا پستی وجود نداره یا همونی که میخوای سرچ کنی نیست :(
            </p>
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
