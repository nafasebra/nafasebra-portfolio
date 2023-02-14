import React from "react";
import Container from "@components/layout/Container";

type PropType = {
  children: JSX.Element[] | JSX.Element;
  id?: string;
};

function DarkSection({ children, id }: PropType) {
  return (
    <section className="bg-dark-200 py-16" id={id}>
      <Container>{children}</Container>
    </section>
  );
}

export default DarkSection;
