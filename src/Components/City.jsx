import React from "react";
import axios from "axios";
const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}&limit=2`;

  return <div>City Data Over Here</div>;
};

export default City;
