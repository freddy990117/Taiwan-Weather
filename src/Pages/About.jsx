import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div>
      <section className="About-Image">Image position</section>
      <section className="Now-Weather">現在天氣</section>
      <section className="Futer-Weather">天氣預測</section>
      <section className="Futer-Rain">下雨機率預測</section>
      <section className="Futer-Tem">一週天氣預測</section>
    </div>
  );
};

export default About;
