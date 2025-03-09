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

    for (let i = 0; i <= dataLength - 1; i++) {
      const city = result.data.records.location[i].locationName;
      const Startweather =
        result.data.records.location[i].weatherElement[0].time[0].startTime;
      const EndWeather =
        result.data.records.location[i].weatherElement[0].time[0].endTime;
      // 下雨機率
      const IsRain =
        result.data.records.location[i].weatherElement[1].time[0].parameter
          .parameterName + "%";
      // 最低溫
      const MinTemperature =
        result.data.records.location[i].weatherElement[2].time[0].parameter
          .parameterName + "°C";
      // 舒適度
      const IsComfortable =
        result.data.records.location[i].weatherElement[3].time[0].parameter
          .parameterName;
      // 最高溫
      const MaxTemperature =
        result.data.records.location[i].weatherElement[4].time[0].parameter
          .parameterName + "°C";

      console.log("我是：", city);
      console.log("開始天氣時間是：", Startweather);
      console.log("結束天氣時間是：", EndWeather);
      console.log("最高溫：", MaxTemperature);
      console.log("最低溫：", MinTemperature);
      console.log("降雨機率：", IsRain);
      console.log("舒適度：", IsComfortable);

      // setData(
      //   city,
      //   Startweather,
      //   EndWeather,
      //   MaxTemperature,
      //   MinTemperature,
      //   IsRain,
      //   IsComfortable
      // );
    }

    console.log(result.data.records.location);
    // 用 map + concat 的方式新增資料嗎？
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
