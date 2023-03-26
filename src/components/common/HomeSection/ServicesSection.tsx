import React from "react";
import DarkSection from "@components/layout/DarkSection";
import ServiceCard from "@components/ui/ServiceCard";
import { ServicesData } from "@data/services";

function ServicesSection() {
  return (
    <DarkSection id="services">
      <div className="pb-16">
        <p className="flex items-center text-light pb-5">
          <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
          خدماتی که <span className="text-orange mr-1">ارائه می‌دم</span>
        </p>
        <h3 className="text-light font-bold text-3xl leading-[3rem]">
          چه کارهایی انجام میدم؟
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {ServicesData.map((item, index) => (
          <ServiceCard
            key={index}
            title={item.title}
            description={item.description}
            id={index + 1}
          />
        ))}
      </div>
    </DarkSection>
  );
}

export default ServicesSection;
