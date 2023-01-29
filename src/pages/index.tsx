import Head from "next/head";
import React from "react";

import Container from "@components/layout/Container";
import DarkSection from "@components/layout/DarkSection";
import Navbar from "@components/common/Navbar";
import Header from "@components/common/Header";
import ServiceCard from "@components/ui/ServiceCard";
import Skills from "@components/common/Skills";
import ProjectCard from "@components/ui/ProjectCard";
import BlogCard from "@components/ui/BlogCard";
import Footer from "@components/common/Footer";

import { Projects } from "@data/projects";
import { ServicesData } from "@data/services";

import { createClient } from "@supabase/supabase-js";

import { PostType } from "@/types/posts"

type PropType = {
  posts: PostType[];
};

function index(props: PropType) {
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

      <Container>
        <Header />
      </Container>

      <main>
        {/* about me section */}
        <DarkSection id="services">
          <div className="pb-16">
            <p className="flex items-center text-light pb-5">
              <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
              خدماتی که <span className="text-orange mr-1">ارائه می‌دم</span>
            </p>
            <h3 className="text-light font-bold text-3xl">
              چه کارهایی انجام میدم؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ServicesData.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.title}
                description={item.description}
                id={index + 1}
              />
            ))}
          </div>
        </DarkSection>

        {/* skills section */}
        <section className="py-32" id="skills">
          <Container>
            <div className="pb-16">
              <p className="flex items-center text-light pb-5">
                <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
                مهارت های <span className="text-orange mr-1">من</span>
              </p>
              <h3 className="text-light font-bold text-3xl">
                چیا بلدم؟ با چه ابزار هایی کار میکنم؟
              </h3>
            </div>

            <Skills />
          </Container>
        </section>

        <DarkSection id="projects">
          <div className="pb-16">
            <p className="flex items-center text-light pb-5">
              <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
              پروژه های <span className="text-orange mr-1"> من </span>
            </p>
            <h3 className="text-light font-bold text-3xl">
              چه کارهایی انجام دادم؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Projects.map((item) => (
              <ProjectCard
                imageUrl={item.imageUrl}
                name={item.name}
                target={item.target}
                description={item.description}
              />
            ))}
          </div>
        </DarkSection>

        <section className="py-36" id="blog">
          <Container>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[28%] mb-5 md:mb-0">
                <h2 className="font-bold text-orange text-3xl lg:text-5xl lg:leading-[5rem]">
                  پست های تازه منتشر شده...
                </h2>
              </div>
              <div className="w-full md:w-[70%]">
                {props.posts.map((item) => (
                  <BlogCard
                    key={item.id}
                    date={item.created_at}
                    title={item.blog_title}
                    description={item.blog_description}
                  />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const supbaseInit = createClient(
    process.env.SUPABASE_URL || "",
    process.env.SUPABASE_KEY || ""
  );

  const { data } = await supbaseInit.from('blog').select('*');

  // console.log(data)

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
