import React from "react";
import Link from "next/link";
import { ExperienceType } from "@data/experiences";

function ExperienceCard(props: ExperienceType) {
  const { title, dateFrom, description, link, dateTo } = props;

  return (
    <div className="overflow-hidden relative rounded-lg bg-dark-100 shadow-dark-100 p-6 flex flex-col gap-4">
      <h3 className="inline-block text-orange font-bold text-2xl">
        <Link href={link}>{title}</Link>
      </h3>
      <div className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
        <p>{dateFrom}</p>
        <p className="text-2xl">-</p>
        <p>{dateTo ?? "الان"}</p>
      </div>
      <ul className="space-y-3">
        {description
          ? description.map((item, index) => (
              <li key={index} className="flex flex-wrap gap-2">
                <span className="mt-[5px] block w-2 h-2 bg-gray-300 rounded-full"></span>
                <p className="text-sm text-gray-300">{item}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ExperienceCard;
