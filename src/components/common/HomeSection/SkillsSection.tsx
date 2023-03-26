import React from "react";
import Container from "@components/layout/Container";
import Skills from "../Skills";

function SkillsSection() {
  return (
    <section className="py-16" id="skills">
      <Container>
        <div className="pb-16">
          <p className="flex items-center text-light pb-5">
            <span className="block ml-2 w-7 h-[3px] bg-orange"></span>
            مهارت های <span className="text-orange mr-1">من</span>
          </p>
          <h3 className="text-light font-bold text-3xl leading-[3rem]">
            با چه ابزار هایی کار میکنم؟
          </h3>
        </div>

        <Skills />
      </Container>
    </section>
  );
}

export default SkillsSection;
