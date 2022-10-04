import Head from "next/head";
import React from "react";

import Container from "../components/layout/Container";
import DarkSection from "../components/layout/DarkSection";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import BlogCard from "../components/ui/BlogCard";
import ProjectCard from "../components/ui/ProjectCard";
import Form from "../components/common/Form";
import Footer from "../components/common/Footer";

import SteecoScreenshot from "../assets/images/steeco-screenshot.png";
import asrezScreenshot from "../assets/images/asrez-screenshot.png";
import { Posts } from "../data/post";

function index() {
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
        <Header />
      </Container>

      <main>
        {/* about me section */}
        <DarkSection>
          <div className="block pb-14">
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
        <section className="py-24">
          <Container>
            <div className="block pb-14">
              <p className="text-light pb-4">
                مهارت های <span className="text-orange">من</span>
              </p>
              <h3 className="text-light font-bold text-3xl">
                چیا بلدم؟ با چه ابزار هایی کار میکنم؟
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-poppins text-left">
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                HTML
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                CSS
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                JavaScript
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                TailwindCSS
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                Bootstrap
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                SASS/LESS
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                ReactJS
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                Redux(toolkit)
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                TypeScript
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                NPM/Yarn
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                Git
              </div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">
                NextJS
              </div>
            </div>
          </Container>
        </section>

        <DarkSection>
          <div className="block pb-14">
            <p className="text-light pb-4">
              پروژه های <span className="text-orange">من</span>
            </p>
            <h3 className="text-light font-bold text-3xl">
              چه کارهایی انجام دادم؟
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectCard
              imageUrl={asrezScreenshot}
              name="وبسایت شرکت اسرز"
              target="https://asrez.com"
            />
            <ProjectCard
              imageUrl={SteecoScreenshot}
              name="وبسایت شرکت استیل صنعت کاشان"
              target="https://steeco.ir"
            />
          </div>
        </DarkSection>

        <section className="py-36">
          <Container>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[28%]">
                <h2 className="font-medium text-orange text-5xl leading-[4.5rem] ">
                  مقاله های تازه <br /> منتشر شده...
                </h2>
                <p className="text-light hover:text-orange flex items-center py-3 cursor-pointer transition-all">
                  <span className="ml-3">بیشتر ببین</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                </p>
              </div>
              <div className="w-full md:w-[70%]">
                {Posts.map((item) => (
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

        <DarkSection>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[30%]">
              <h2 className="font-medium text-orange text-5xl leading-[4.5rem] ">
                ارسال ایمیل <br /> به من
              </h2>
              <p className="text-gray-300 pt-10">
                اگر سوال یا موردی هست که دوست دارید باهام درمیون بذارید. به شبکه های اجتماعی یا فرم کناری بهم پیام بدید. میخونمشون :)
              </p>
            </div>
            <div className="w-full md:w-[60%]">
              <Form />
            </div>
          </div>
        </DarkSection>
      </main>

      <Footer />
    </>
  );
}

export default index;
