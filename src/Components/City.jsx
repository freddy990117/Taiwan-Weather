import React, { useState } from "react";
import axios from "axios";
const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  const [data, setData] = useState([]);
  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}&limit=2`;

  async function fetchAPI() {
    const result = await axios.get(API);
    console.log(result.data.records.location);
  }

  fetchAPI();
  return <div></div>;
};

export default City;
