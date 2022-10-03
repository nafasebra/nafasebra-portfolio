import React from "react";

type PropType = {
  title: string;
  description: string;
  date: string;
};

function BlogCard() {
  //   const { date, description, title } = props;

  return (
    <div className="bg-dark-200 shadow-dark-100 py-3 px-4 rounded-xl">
      <h2 className="text-orange font-bold text-2xl">
        تفاوت بین برنامه نویسی و کدنویسی
      </h2>
      <p className="py-2 text-light text-sm">12 مرداد 1402</p>
      <p className="pt-1 text-light leading-6">
        درود به همگی امیدوارم حالتون خوب باشه... امروز قراره که دراین مورد صحبت کنیم که ممکنه برای خیلی ها سوال باشه اینکه فرق بین برنامه نویسی و کدنویسی چیه؟ و توی کدوم قسمتم؟
      </p>
    </div>
  );
}

export default BlogCard;
