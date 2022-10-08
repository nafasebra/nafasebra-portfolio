import React from "react";
import Container from "./Container";

type PropType = {
  children: JSX.Element[] | JSX.Element;
  id: string;
};

function DarkSection({ children, id }: PropType) {
  return (
    <section className="bg-dark-200 py-36" id={id}>
      <Container>{children}</Container>
    </section>
  );
}

export default DarkSection;
