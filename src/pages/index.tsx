import Head from "next/head";
import React from "react";

import Container from "../components/layout/Container";
import DarkSection from "../components/layout/DarkSection";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import BlogCard from "../components/ui/BlogCard";
import ProjectCard from "../components/ui/ProjectCard";
import Footer from "../components/common/Footer";

import { Posts, PostType } from "../data/post";
import Skills from "../components/common/Skills";
import { Projects } from "../data/projects";

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
          content="سلام به همگی. بنده نفس ابراهیمی هستم و درحوزه برنامه نویسی فرانت اند کار میکنم. خوشحال میشم یک سری به سایتم بزنی. راستی خیلی اتفاقا قراره اینجا بیوفته :)"
        />
      </Head>

      <Navbar />

      <Container>
        <Header />
      </Container>

      <main>
        {/* about me section */}
        <DarkSection id="about">
          <div className="pb-16">
            <p className="text-light pb-4">
              درباره <span className="text-orange">من</span>
            </p>
            <h3 className="text-light font-bold text-3xl">من کیم؟</h3>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="w-full md:w-[45%]">
              <p className="text-gray-400 leading-7">
                حدودا دو سه سالی هست برنامه نویسی فرانت اند کار میکنم. علاقه مند
                به خلق کردن, یاددادن و یادگیری. علاقه مند به کارهای تیمی و
                اینچیزا :) برای همینه که شغل برنامه نویسی رو انتخاب کردم <br />
                رسالتم اینه که برای جامعه اونطوری که از دستم برمیاد کاری انجام
                بدم و دنیا رو یک جای راحتی برای انسان های دوست داشتنی تبدیل کنم
              </p>
            </div>
            <div className="w-full md:w-[45%]">{/* image content */}</div>
          </div>
        </DarkSection>

        {/* skills section */}
        <section className="py-32" id="skills">
          <Container>
            <div className="pb-16">
              <p className="text-light pb-4">
                مهارت های <span className="text-orange">من</span>
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
            <p className="text-light pb-4">
              پروژه های <span className="text-orange">من</span>
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
                <h2 className="font-bold text-orange text-xl lg:text-5xl leading-[4.5rem] ">
                  مقاله های تازه <br /> منتشر شده...
                </h2>
              </div>
              <div className="w-full md:w-[70%]">
                {props.posts.map((item) => (
                  <BlogCard
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    description={item.body}
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
  return {
    props: {
      posts: Posts,
    },
  };
};

export default index;
