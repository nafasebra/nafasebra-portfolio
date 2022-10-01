import Head from "next/head";
import React from "react";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Container from "../components/layout/Container";
import DarkSection from "../components/layout/DarkSection";

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
        <section className="py-20">
          <Container>
            <div className="block pb-14">
              <p className="text-light pb-4">
                مهارت های <span className="text-orange">من</span>
              </p>
              <h3 className="text-light font-bold text-3xl">
                چیا بلدم؟ با چه ابزار هایی کار میکنم؟
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">HTML</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">CSS</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">JavaScript</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">TailwindCSS</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">Bootstrap</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">SASS/LESS</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">ReactJS</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">Redux(toolkit)</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">TypeScript</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">NPM/Yarn</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">Git</div>
              <div className="py-3 px-4 text-light rounded-lg bg-dark-200">NextJS</div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default index;
