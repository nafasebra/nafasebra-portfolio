import React from "react";
import Container from "./Container";

type PropType = {
  children: JSX.Element[] | JSX.Element;
};

function DarkSection({ children }: PropType) {
  return (
    <section className="bg-dark-200 py-20 my-10">
      <Container>{children}</Container>
    </section>
  );
}

export default DarkSection;
