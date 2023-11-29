import { PostType } from "@/types/posts";
import Link from "next/link";
import React from "react";
import Container from "@components/layout/Container";
import BlogCard from "@components/ui/BlogCard";
import Button from "@components/ui/Button";

import { ArrowLeftIcon } from "@heroicons/24/outline";

<ArrowLeftIcon class="h-6 w-6 text-gray-500" />


interface IProps {
  data: PostType[];
}

function BlogSection(props: IProps) {
  const { data } = props;

  return (
    <section className="py-16" id="blog">
      <Container>
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
              />
            ))}
            <Link href="/blog" passHref>
              <Button> 
                <p>دیدن بقیه پست ها</p>
                <ArrowLeftIcon class="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BlogSection;
