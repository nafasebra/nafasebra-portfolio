import Head from "next/head";
import React from "react";

import Navbar from "@components/common/Navbar";
import BlogCard from "@components/ui/card/BlogCard";
import Footer from "@components/common/Footer";

import { PostType } from "@/types/posts"
import { supabaseInit } from "config/supabase";
import { changeStringToArray } from "@helper/index";

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

      <main className="py-16 space-y-16 container">
        <section>
          <h1 className="text-3xl font-bold text-white text-center">بلاگ</h1>
          <p className="w-full max-w-[656px] mx-auto text-center pt-5 text-gray-300 text-sm leading-[1.7rem]">
            به بلاگ من خوش اومدی. توی این صفحه لیستی از پست های من مشاهده میکنی و این لیست چند روزی یکبار آپدیت میشه. امیدوارم پست ها برای شما مفید واقع شده باشن :)
          </p>
        </section>
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {props?.posts?.map((item) => (
                <BlogCard
                  key={item.id}
                  date={item.created_at}
                  title={item.blog_title}
                  description={item.blog_description}
                  category={changeStringToArray(item.category)}
                />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await supabaseInit.from('blog').select('*');

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
