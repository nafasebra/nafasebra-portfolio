import React from "react";
import TopSection from "@components/ui/TopSection";
import Skills from "../Skills";

function SkillsSection() {
  return (
    <section className="py-16 container space-y-10" id="skills">
      <TopSection title="مهارت های من" subTitle="به چه ابزار ها/تکنولوژی هایی مسلط هستم؟" />

      <Skills />
    </section>
  );
}

export default SkillsSection;
