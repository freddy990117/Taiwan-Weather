import React, { useState } from "react";
import axios from "axios";
const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  const [data, setData] = useState([]);
  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}&limit=2`;

  async function fetchAPI() {
    const result = await axios.get(API);
    const city = result.data.records.location[0].locationName;
    const Startweather =
      result.data.records.location[0].weatherElement[0].time[0].startTime;
    const EndWeather =
      result.data.records.location[0].weatherElement[0].time[0].endTime;
    // 下雨機率
    const IsRain =
      result.data.records.location[0].weatherElement[1].time[0].parameter
        .parameterName + "%";
    // 最低溫
    const MinTemperature =
      result.data.records.location[0].weatherElement[2].time[0].parameter
        .parameterName + "°C";
    // 舒適度
    const IsComfortable =
      result.data.records.location[0].weatherElement[3].time[0].parameter
        .parameterName;
    // 最高溫
    const MaxTemperature =
      result.data.records.location[0].weatherElement[4].time[0].parameter
        .parameterName + "°C";

    console.log(result.data.records.location);
    console.log("我是：", city);
    console.log("我的開始天氣時間是：", Startweather);
    console.log("我是結束天氣時間是：", EndWeather);
    console.log("最高溫：", MaxTemperature);
    console.log("最低溫：", MinTemperature);
    console.log("降雨機率：", IsRain);
    console.log("舒適度：", IsComfortable);
  }
  fetchAPI();

  return <div></div>;
};

export default City;

// Wx 天氣現象
// MaxT 最高溫度
// MinT 最低溫度
// CI 舒適度
// PoP 降雨機率
