import { useState } from "react";
import { useEffect } from "react";

function WeatherCard({searchInput}) {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?key=RZ2MPVLFWPHPNG4Z2ARL7CGGH`
      );
      const data = await res.json();
      console.log(data);
      setWeatherData([data]);
    };
    fetchData();
  }, [searchInput]);
  console.log(weatherData);
  return (
    <div className="mx-auto max-w-lg  rounded-xl shadow-lg overflow-hidden bg-neutral-900 text-white min-h-32">
      {weatherData?.map((W, indx) => (
        <div key={indx} className="px-6 py-4 text-white">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold ">{W.address}</h2>
            <p className="">{W.currentConditions.datetime}</p>
          </div>

          <div className="flex items-center justify-center mt-4">
          
            <img
              src={`images/${W.currentConditions.icon}.png`} 
              alt="Weather Icon"
              className="w-12 h-12"/>
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-6xl font-bold  ml-4">
                {(((W.currentConditions.temp - 32) * 5) / 9).toFixed(0)} °C
              </h1>
              <div className="flex gap-4">
                <p>{W.currentConditions.conditions} </p>
                <p>Feels like {W.currentConditions.feelslike}* F</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
          <div >
            <p className="mt-2">PRESSURE</p>
            <p>{W.currentConditions.pressure}</p>
          </div>
          <div>
            <p className="mt-2">WIND</p>
            <p>{W.currentConditions.windspeed}mp/h</p>
          </div>
          <div>
            <p className="mt-2">VISIBILITY</p>
            <p>{W.currentConditions.visibility}</p>
          </div>
          <div>
            <p className="mt-2">HUMIDITY</p>
            <p>{W.currentConditions.humidity}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;
