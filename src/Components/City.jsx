import React from "react";
import "../styles/city.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faUmbrella,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import imgSrc from "../Context/image";

// 接收 data Props
const City = ({ firstElements, selectCity }) => {
  return (
    <div className="City">
      {firstElements &&
        firstElements.map((weather, index,item) => {
          const image = imgSrc[weather.city] || imgSrc.default; // 直接查找物件，如果沒有符合的照片，則顯示 defalut 的照片
          return (
            <section
              // 加入重點提示的動畫，動畫名稱是 point
              className={`cityComponent ${selectCity === index ? "point" : ""}`}
              key={item}
              id={index}
            >
              <img src={image} alt={weather.city} />
              <h2>{weather.city}</h2>
              <span>
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faCloud} />
                天氣概況：{weather.isComfortable}
              </span>
              <span>
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  icon={faTemperatureHalf}
                />
                溫度位於：{weather.minTemp}°C - {weather.maxTemp}°C
              </span>
              <span>
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  icon={faUmbrella}
                />
                降雨機率：{weather.isRain}％
              </span>
            </section>
          );
        })}
    </div>
  );
};

export default City;
