import React from "react";
import ServiceCard from "@components/ui/card/ServiceCard";
import TopSection from "@components/ui/TopSection";
import { ServicesData } from "@data/services";

function ServicesSection() {
  return (
    <section className="py-16 container" id="services">
      <TopSection title="خدمات" subTitle="چه کارهایی از دستم برمیاد؟" />

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
    </section>
  );
}

export default ServicesSection;
