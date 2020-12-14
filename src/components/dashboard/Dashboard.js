import React from "react";
import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import background from "../../assets/img/pattern_1.svg";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Section1 />
      <div
        className="position-realive bg-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <Section5 />
      <Section6 />
    </>
  );
}
