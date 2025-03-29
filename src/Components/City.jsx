import React from "react";
import "../styles/city.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faUmbrella,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
const imgSrc = {
  default: "../images/Taiwan.jpg", // 預設圖片
  臺中市: "../images/台中市.jpg",
  臺北市: "../images/台北市.jpg",
  臺東縣: "../images/台東縣.jpg",
  臺南市: "../images/台南市.jpg",
  宜蘭縣: "../images/宜蘭縣.jpg",
  花蓮縣: "../images/花蓮縣.jpg",
  南投縣: "../images/南投縣.jpg",
  屏東縣: "../images/屏東縣.jpg",
  苗栗縣: "../images/苗栗縣.jpg",
  桃園市: "../images/桃園市.jpg",
  高雄市: "../images/高雄市.jpg",
  基隆市: "../images/基隆市.jpg",
  連江縣: "../images/連江縣.jpg",
  雲林縣: "../images/雲林縣.jpg",
  新北市: "../images/新北市.jpg",
  新竹市: "../images/新竹市.jpg",
  嘉義市: "../images/嘉義市.jpg",
  嘉義縣: "../images/嘉義縣.jpg",
  彰化縣: "../images/彰化縣.jpg",
  澎湖縣: "../images/澎湖縣.jpg",
  新竹縣: "../images/新竹縣.jpg",
};
// 接收 data Props
const City = ({ firstElements, selectCity }) => {
  return (
    <div className="City">
      {firstElements &&
        firstElements.map((weather, index) => {
          const image = imgSrc[weather.city] || imgSrc.default; // 直接查找物件，如果沒有符合的照片，則顯示 defalut 的照片
          return (
            <section
              // 加入重點提示的動畫，動畫名稱是 point
              className={`cityComponent ${selectCity === index ? "point" : ""}`}
              key={index}
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
                溫度位於：{weather.minTemp} - {weather.maxTemp} 之間
              </span>
              <span>
                <FontAwesomeIcon
                  className="FontAwesomeIcon"
                  icon={faUmbrella}
                />
                降雨機率：{weather.isRain}
              </span>
            </section>
          );
        })}
    </div>
  );
};

export default City;
