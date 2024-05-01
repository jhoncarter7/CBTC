import WeatherCard from "./components/WeatherCard"
const res = await fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=RZ2MPVLFWPHPNG4Z2ARL7CGGH"
);
function App() {
  return (
    <div className="bg-gray-700 h-screen">
      <WeatherCard/>
    </div>
  )

}

export default App