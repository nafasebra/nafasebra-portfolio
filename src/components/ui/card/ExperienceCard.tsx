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
      <ul className="space-y-2 list-disc pr-3 text-gray-300">
        {description
          ? description.map((item, index) => (
              <li key={index}>
                <p className="text-sm">{item}</p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ExperienceCard;
