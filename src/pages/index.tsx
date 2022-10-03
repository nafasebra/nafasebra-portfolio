import Head from "next/head";
import Image from "next/image";
import React from "react";

import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Container from "../components/layout/Container";
import DarkSection from "../components/layout/DarkSection";

import SteecoScreenshot from "../assets/images/steeco-screenshot.png";
import asrezScreenshot from "../assets/images/asrez-screenshot.png";



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
                حدودا دو سه سالی هست برنامه نویسی فرانت اند کار میکنم و دانشجوی
                لیسانس دانشگاه فنی اصفهانم. علاقه مند به خلق کردن, یاددادن و
                یادگیری. علاقه مند به کارهای تیمی و اینچیزا :) برای همینه که شغل
                برنامه نویسی رو انتخاب کردم <br />
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
            <div className="flex flex-col">
              <div className="relative block w-full h-[170px] rounded-lg overflow-hidden group">
                <div className="z-10 absolute inset-0 flex items-center justify-center bg-orange text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                  <a href="https://www.asrez.com" className="flex items-center py-3 px-4 rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-orange">
                    <svg className="w-6 h-6 transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span className="mr-5">مشاهده سایت</span>
                  </a>
                </div>
                <Image src={asrezScreenshot} className="w-full h-full object-cover" alt="اسکرین شات وبسایت اسرز" />
              </div>
              <p className="text-gray-300 text-center py-3 text-sm">وبسایت شرکت اسرز</p>
            </div>
            <div className="flex flex-col">
              <div className="relative block w-full h-[170px] rounded-lg overflow-hidden group">
                <div className="z-10 absolute inset-0 flex items-center justify-center bg-orange text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0">
                  <a href="https://www.steeco.ir" className="flex items-center py-3 px-4 rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-orange">
                    <svg className="w-6 h-6 transition-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    <span className="mr-5">مشاهده سایت</span>
                  </a>
                </div>
                <Image src={SteecoScreenshot} className="w-full h-full object-cover" alt="اسکرین شات وبسایت استیل صنعت کاشان" />
              </div>
              <p className="text-gray-300 text-center py-3 text-sm">وبسایت شرکت استیل صنعت کاشان</p>
            </div>
          </div>
        </DarkSection>

        <section>
          <Container>
            <div className="block pb-14">
              <h3 className="text-light font-bold text-3xl">
                مقاله های منتشر شده...
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className=""></div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default index;
