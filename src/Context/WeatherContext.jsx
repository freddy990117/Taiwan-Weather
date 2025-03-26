import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const APIKey = import.meta.env.VITE_API_KEY;

// 建立一個全域狀態管理的 Context
export const WeatherContext = createContext();

// 建立 Weather's API Provider (WeatherProvider)
export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}`;
      let result = await axios.get(API);
      const location = result.data.records.location;

      const newData = location.map((cityData) => ({
        city: cityData.locationName,
        startTime: cityData.weatherElement[0].time[0].startTime,
        endTime: cityData.weatherElement[0].time[0].endTime,
        isRain:
          cityData.weatherElement[1].time[0].parameter.parameterName + "%",
        minTemp:
          cityData.weatherElement[2].time[0].parameter.parameterName + "°C",
        isComfortable:
          cityData.weatherElement[3].time[0].parameter.parameterName,
        maxTemp:
          cityData.weatherElement[4].time[0].parameter.parameterName + "°C",
      }));

      setData(newData);
    }
    fetchAPI();
  }, []);

  return (
    // WeatherContext 提供 value (API's Data) for children，children 會在 Layout.jsx 帶入
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
