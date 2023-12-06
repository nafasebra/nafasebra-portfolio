import React from "react";
import { removeHtmlTag } from "@helper/index";
import Link from "next/link";

type PropType = {
  title: string;
  description: string;
  date: string;
};

function BlogCard(props: PropType) {
  const { date, description, title } = props;

  return (
    <Link
      href={`/blog/${encodeURIComponent(title)}`}
      passHref
      legacyBehavior
    >
      <div className="bg-dark-100 shadow-dark-100 py-6 px-7 rounded-xl cursor-pointer">
        <h3 className="inline-block text-orange font-bold text-2xl">
          {title}
        </h3>
        <p className="py-2 text-gray-400 text-sm">
          {new Date(date).toLocaleDateString("fa-IR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="pt-2 text-gray-300 leading-6 text-[0.9rem]">
          {removeHtmlTag(description.substring(0, 250)) + "..."}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;
