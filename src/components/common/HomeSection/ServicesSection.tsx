import React from "react";
import DarkSection from "@components/layout/DarkSection";
import ServiceCard from "@components/ui/ServiceCard";
import { ServicesData } from "@data/services";
import TopSection from "@components/ui/TopSection";

function ServicesSection() {
  return (
    <DarkSection id="services">
      <TopSection title="خدماتی که ارائه میدم" subTitle="چه کارهایی از دستم برمیاد؟" />

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
