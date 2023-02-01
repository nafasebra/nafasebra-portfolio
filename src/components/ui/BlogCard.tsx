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
    <div className="bg-dark-200 shadow-dark-100 py-6 px-7 rounded-xl mb-7">
      <Link
        href={`/blog/?title=${encodeURIComponent(title)}`}
        as={`/blog/${encodeURIComponent(title)}`}
      >
        <h3 className="inline-block text-orange font-bold text-2xl cursor-pointer">
          {title}
        </h3>
      </Link>
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
  );
}

export default BlogCard;
