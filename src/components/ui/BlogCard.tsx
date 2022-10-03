import React from "react";

type PropType = {
  title: string;
  description: string;
  date: string;
};

function BlogCard(props: PropType) {
    const { date, description, title } = props;

  return (
    <div className="bg-dark-200 shadow-dark-100 py-6 px-7 rounded-xl mb-7">
      <h2 className="text-orange font-bold text-2xl">
        {title}
      </h2>
      <p className="py-2 text-gray-400 text-sm">
        {date}
      </p>
      {/* <p className="pt-2 text-gray-200 leading-6 text-[0.9rem]">
        درود به همگی امیدوارم حالتون خوب باشه... امروز قراره که دراین مورد صحبت کنیم که ممکنه برای خیلی ها سوال باشه اینکه فرق بین برنامه نویسی و کدنویسی چیه؟ و توی کدوم قسمتم؟
      </p> */}
      <p className="pt-2 text-gray-200 leading-6 text-[0.9rem]" dangerouslySetInnerHTML={{__html: description}}></p>
    </div>
  );
}

export default BlogCard;
