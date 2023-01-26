import React from "react";
import Loading from "@components/ui/Loading";

function SplashScreen() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-dark-100"
      style={{
        opacity: 1,
        visibility: "visible",
        zIndex: "30",
      }}
      id="splashScreen"
    >
      <Loading />
    </div>
  );
}

export default SplashScreen;
