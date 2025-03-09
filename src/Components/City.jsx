import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/city.css";
const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  // data 用於存取 API 的資料
  const [data, setData] = useState([]);
  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}&limit=2`;

  // 未設定依賴值，所以只執行一次
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
    <div>
      <h2>天氣資訊</h2>
      <ul>
        {data.map((weather, index) => (
          <li key={index}>
            {weather[0]}：{weather[4]} - {weather[3]}，降雨機率 {weather[5]}，
            {weather[6]}
          </li>
        ))}
      </ul>
      <section className="cityComponent">
        <img src="../images/台中市.jpg" alt="" />
        <h3>City Name</h3>
        <span>Weather</span>
        <span>Temperature</span>
        <span>IsRain</span>
        <span>IsComfortable</span>
      </section>
    </div>
  );
};

export default City;

// Wx 天氣現象
// MaxT 最高溫度
// MinT 最低溫度
// CI 舒適度
// PoP 降雨機率
