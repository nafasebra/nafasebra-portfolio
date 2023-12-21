import React from "react";
import Link from "next/link";
import BlogCard from "@components/ui/card/BlogCard";
import Button from "@components/ui/button/Button";
import { PostType } from "@/types/posts";
import { changeStringToArray } from "@helper/index";

interface IProps {
  data: PostType[];
}

function BlogSection(props: IProps) {
  const { data } = props;

  return (
    <section className="py-16 container" id="posts">
      <div className="flex flex-col md:flex-row gap-9">
        <div className="w-full md:w-[30%] relative">
          <span className="square"></span>
          <span className="square"></span>
          <span className="square"></span>
          <h2 className="text-center lg:text-right font-bold text-orange text-3xl leading-[3rem] lg:text-5xl lg:leading-[5rem]">
            پست های تازه منتشر شده...
          </h2>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[70%]">
          {data?.map((item: PostType) => (
            <BlogCard
              key={item.id}
              date={item.created_at}
              title={item.blog_title}
              description={item.blog_description}
              category={changeStringToArray(item.category)}
            />
          ))}
          <Link href="/blog" passHref={true}>
            <Button> 
              <p>دیدن بقیه پست ها</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
