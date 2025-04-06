# Taiwan Weather 🇹🇼
A web application for you to readily find weather condition and forecast in Taiwan ☀️


### Trial in this project 🚩
**Open Weather Data**
+ Acquire data from [open API](https://opendata.cwa.gov.tw/dist/opendata-swagger.html#/) provided by Central Weather Bureau in Taiwan


**Chart.js**
+ [Chart.js](https://www.chartjs.org/) is used to visualize data in beautiful chart

___

## Project First Look

Here will put video (Project Not Finish)


## Features

| Function                  | Detail                                                                                                                                                     |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View current weather      | Users can find current weather conditions, temperature and probability of precipitation for each city                                                    |
| View weather forecast     | 1. Users can view a city's weather forecast for the next 7 days in a table (including weather, temperature, and PoP)<br>2. View forecasted PoP in a bar chart<br>3. View max & min temperature in a line chart |

---

## Installation

Follow these instructions to get a copy of the project and run it on your local machine.


### Clone

Clone this repository to your local machine

```
$ git clone https://github.com/freddy990117/Taiwan-Weather.git
```


### Setup

**1. Create an account on Central Weather Bureau**
- [https://opendata.cwb.gov.tw/index](https://opendata.cwa.gov.tw/index)


**2. Get an API Key**

```
Login ->  會員資訊 -> API授權碼 -> 取得授權碼
```

**3. Enter the project folder**

```
$ cd Taiwan-Weather
```

**4. Fill in your API key in both local.js & index.js and save**

```
Create a .env file and input your API Key
VITE_API_KEY= "YOUR_API_KEY"
```

**5. 
```
npm install
```

**6. 
```
npm run dev
```
___

## Authors 🙋🏻‍♂️
Freddy Chang

## Acknowledgments 🙏

Special thanks to [smallpaes](https://github.com/smallpaes/taiwan-weather-api) for providing the original structure and design inspiration for this project.
