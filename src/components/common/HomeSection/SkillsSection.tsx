import React from "react";
import Container from "@components/layout/Container";
import Skills from "../Skills";
import TopSection from "@components/ui/TopSection";

function SkillsSection() {
  return (
    <section className="py-16" id="skills">
      <Container>
        <TopSection title="مهارت های من" subTitle="به چه ابزار ها/تکنولوژی هایی مسلط هستم؟" />

        <Skills />
      </Container>
    </section>
  );
}

export default SkillsSection;
