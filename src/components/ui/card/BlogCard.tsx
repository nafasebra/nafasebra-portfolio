import React from "react";
import { removeHtmlTag } from "@helper/index";
import Link from "next/link";

type PropType = {
  title: string;
  description: string;
  date: string;
  category: string[];
};

function BlogCard(props: PropType) {
  const { date, description, title, category } = props;

  return (
    <Link
      href={`/blog/${encodeURIComponent(title)}`}
      passHref
      legacyBehavior
    >
      <div className="bg-dark-100 space-y-3 shadow-dark-100 py-6 px-7 rounded-xl cursor-pointer">
        <h3 className="inline-block text-orange font-bold text-2xl">
          {title}
        </h3>
        <p className="text-sm text-gray-500">
          {new Date(date).toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="text-gray-300 leading-6 text-[0.9rem]">
          {removeHtmlTag(description.substring(0, 250)) + "..."}
        </p>
        <div className="flex flex-wrap gap-2">
          {
            category.map((item, index) => (
              <div key={index} className="bg-gray-700 rounded-lg text-gray-300 px-3 py-1 text-[0.75rem]">
                {item}
              </div>
            ))
          }
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
