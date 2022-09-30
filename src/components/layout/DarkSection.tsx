import React from "react";
import Container from "./Container";

type PropType = {
  children: JSX.Element[] | JSX.Element;
};

function DarkSection({ children }: PropType) {
  return (
    <div className="bg-dark-200 py-5">
      <Container>{children}</Container>
    </div>
  );
}

export default DarkSection;
