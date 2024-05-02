import WeatherCard from "./components/WeatherCard";
import SmallCard from "./components/SmallCard";
import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [weatherData, setWeatherData] = useState([]);
   const [searchInput, setSearchInput] = useState("delhi");
 
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?key=RZ2MPVLFWPHPNG4Z2ARL7CGGH`
      );
      const data = await res.json();

      setWeatherData(data.days);
    };
    fetchData();
  }, [searchInput]);
 
  const handleSearch  = (input) =>{
  setSearchInput(input)
  }
  console.log(searchInput)
  return (
    <div className="bg-gray-700 h-screen flex flex-col justify-between gap">
      <Search handleSearch={handleSearch}/>
      <div className="mb-4">
      <WeatherCard searchInput={searchInput}/>
      </div>
      <div className="bg-neutral-900  mx-4 rounded-md overflow-y-scroll  bottom-0  mt-4 scroll-m-0">
        <h1 className="text-white text-xl mb-5 pl-8">Weather forecast</h1>
        <div className="flex justify-around flex-wrap ">
          {weatherData.slice(0, 7).map((w, indx) => (
            <SmallCard
              key={indx}
              datetime={w.datetime}
              conditions={w.conditions}
              feelslike={w.feelslike}
              temp={w.temp}
              icon={w.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
