import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/city.css";
const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  // data 用於存取 API 的資料
  const [data, setData] = useState([]);
  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}&limit=2`;

  // 只需要執行一次，所以不赦定依賴值
  useEffect(() => {
    // 拿取 API 資料
    async function fetchAPI() {
      // API's Data
      let result = await axios.get(API);
      const location = result.data.records.location;
      const dataLength = location.length;
      // 建立一個 Array 來存放我需要的 API 資料
      const newData = [];

      // 遍佈所有資料並加入到 newData 內
      for (let i = 0; i <= dataLength - 1; i++) {
        const city = location[i].locationName;
        const Startweather = location[i].weatherElement[0].time[0].startTime;
        const EndWeather = location[i].weatherElement[0].time[0].endTime;
        // 下雨機率
        const IsRain =
          location[i].weatherElement[1].time[0].parameter.parameterName + "%";
        // 最低溫
        const MinTemperature =
          location[i].weatherElement[2].time[0].parameter.parameterName + "°C";
        // 舒適度
        const IsComfortable =
          location[i].weatherElement[3].time[0].parameter.parameterName;
        // 最高溫
        const MaxTemperature =
          location[i].weatherElement[4].time[0].parameter.parameterName + "°C";

        // console.log("我是：", city);
        // console.log("開始天氣時間是：", Startweather);
        // console.log("結束天氣時間是：", EndWeather);
        // console.log("最高溫：", MaxTemperature);
        // console.log("最低溫：", MinTemperature);
        // console.log("降雨機率：", IsRain);
        // console.log("舒適度：", IsComfortable);

        // 新增資料進入 newData
        newData.push([
          city,
          Startweather,
          EndWeather,
          MaxTemperature,
          MinTemperature,
          IsRain,
          IsComfortable,
        ]);
      }
      // 更新 data 狀態，避免無限渲染
      setData(newData);
    }
    fetchAPI();
  }, []);
  return (
    // 最終 return 的結果 (父元素)
    <div className="City">
      {/* data 是一個陣列，透過 map 的方式回傳一個新陣列 */}
      {data.map((weather, index) => {
        // 如果沒有符合的圖片，預設開啟 Taiwan.jpg
        let imgSrc = "../images/Taiwan.jpg";
        // 透過 Switch case 簡單比較法來顯示圖片
        switch (weather[0]) {
          case "台中市":
            imgSrc = "../images/台中市.jpg";
            break;
          case "台北市":
            imgSrc = "../images/台北市.jpg";
            break;
          case "台東縣":
            imgSrc = "../images/台東縣.jpg";
            break;
          case "台南市":
            imgSrc = "../images/台南市.jpg";
            break;
          case "宜蘭縣":
            imgSrc = "../images/宜蘭縣.jpg";
            break;
          case "花蓮縣":
            imgSrc = "../images/花蓮縣.jpg";
            break;
          case "南投縣":
            imgSrc = "../images/南投縣.jpg";
            break;
          case "屏東縣":
            imgSrc = "../images/屏東縣.jpg";
            break;
          case "苗栗線":
            imgSrc = "../images/苗栗線.jpg";
            break;
          case "桃園市":
            imgSrc = "../images/桃園市.jpg";
            break;
          case "高雄市":
            imgSrc = "../images/高雄市.jpg";
            break;
          case "基隆市":
            imgSrc = "../images/基隆市.jpg";
            break;
          case "連江縣":
            imgSrc = "../images/連江縣.jpg";
            break;
          case "雲林縣":
            imgSrc = "../images/雲林縣.jpg";
            break;
          case "新北市":
            imgSrc = "../images/新北市.jpg";
            break;
          case "新竹市":
            imgSrc = "../images/新竹市.jpg";
            break;
          case "嘉義市":
            imgSrc = "../images/嘉義市.jpg";
            break;
          case "嘉義縣":
            imgSrc = "../images/嘉義縣.jpg";
            break;
          case "彰化縣":
            imgSrc = "../images/彰化縣.jpg";
            break;
          case "澎湖縣":
            imgSrc = "../images/澎湖縣.jpg";
            break;
        }

        // return data (子元素)
        return (
          <section className="cityComponent" key={index}>
            <img src={imgSrc} alt={weather[0]} />
            <h2>{weather[0]}</h2>
            <span>天氣概況：{weather[6]}</span>
            <span>
              溫度位於：{weather[4]} - {weather[3]} 之間
            </span>
            <span>降雨機率：{weather[5]}</span>
          </section>
        );
      })}
    </div>
  );
};

export default City;

// Wx 天氣現象
// MaxT 最高溫度
// MinT 最低溫度
// CI 舒適度
// PoP 降雨機率
