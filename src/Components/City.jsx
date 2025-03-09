import React, { useEffect, useState } from "react";
import axios from "axios";
const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  const [data, setData] = useState([]);
  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}&limit=2`;

  // 拿取 API 資料
  async function fetchAPI() {
    let result = await axios.get(API);
    const location = result.data.records.location;
    const dataLength = location.length;
    const newData = []; // 新增一個 Array 用來存放的資料

    for (let i = 0; i <= dataLength; i++) {
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

      console.log("我是：", city);
      console.log("開始天氣時間是：", Startweather);
      console.log("結束天氣時間是：", EndWeather);
      console.log("最高溫：", MaxTemperature);
      console.log("最低溫：", MinTemperature);
      console.log("降雨機率：", IsRain);
      console.log("舒適度：", IsComfortable);

      // 新增資料進入 Array
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

  return <div className="picture">這邊是CITY PAGE a</div>;
};

export default City;

// Wx 天氣現象
// MaxT 最高溫度
// MinT 最低溫度
// CI 舒適度
// PoP 降雨機率
