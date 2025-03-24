import { React, useState } from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div>
      <section className="about about-image">
        <h1>
          <span className="city-name">City Name</span>
        </h1>
      </section>
      {/* 現在天氣 */}
      <section className="about now-weather">
        <h1>現在天氣</h1>
        <div className="about-weather">
          <div className="about-wind">
            <h2>天氣現象</h2>
            <span className="info wind">ICON</span>
          </div>
          <div className="about-temp">
            <h2>平均溫度</h2>
            <span className="info temp">ICON</span>
          </div>
          <div className="about-rain">
            <h2>降雨機率</h2>
            <span className="info rain">ICON</span>
          </div>
        </div>
      </section>
      {/* 天氣預測 */}
      <section className="about future-weather">
        <h1>天氣預測</h1>
        {/* <button onClick={PrevBtn}>←</button> */}
        <div className="weather-nav">
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
        </div>
        {/* <button onClick={NextBtn}>→</button> */}
      </section>
      {/* 下雨機率 */}
      <section className="about future-rain">下雨機率預測</section>
      {/* 整週天氣 */}
      <section className="about future-temp">一週天氣預測</section>
    </div>
  );
};

export default About;
