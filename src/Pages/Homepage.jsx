import React from "react";
import "../styles/style.css";
const Homepage = () => {
  return (
    <div>
      <section className="homepageImage">
        <img src="../images/Taiwan.jpg" alt="Taiwan Mountain" />
        {/* <figcaption>Alishan Ｍountain</figcaption> */}
        <h1>全台天氣概況</h1>
        <h2>點我選城市</h2>
      </section>
      <section>{/* City Images Data */}</section>
    </div>
  );
};

export default Homepage;
