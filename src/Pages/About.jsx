import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div>
      <section className="about about-image">
        <h1>
          <span className="city-name">City Name</span>
        </h1>
      </section>
      <section className="about now-weather">
        <h1>現在天氣</h1>
        <div className="about-weather">
          <div className="about-wind">
            天氣現象
            <span className="icon wind">ICON</span>
          </div>
          <div className="about-temp">
            平均溫度
            <span className="icon temp">ICON</span>
          </div>
          <div className="about-rain">
            降雨機率
            <span className="icon rain">ICON</span>
          </div>
        </div>
      </section>
      <section className="about future-weather">天氣預測</section>
      <section className="about future-rain">下雨機率預測</section>
      <section className="about future-temp">一週天氣預測</section>
    </div>
  );
};

export default About;
