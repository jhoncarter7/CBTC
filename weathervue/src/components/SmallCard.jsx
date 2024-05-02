/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function SmallCard({ datetime, conditions, feelslike, temp, icon }) {


  return (
    <div className="bg-zinc-800 rounded-2xl text-[#d3cfcf]  flex flex-col   mb-4 space-y-5 gap-6 p-3">
      <div className="space-y-2">
        <p>{datetime}</p>
        <div>
          <h3 className="text-3xl">{(((temp - 32) * 5) / 9).toFixed(0)}°C</h3>
          <img src={`images/${icon}.png`} alt="" />
          {}
        </div>
        <div>
        </div>
      </div>
      <div className="rounded-3xl text-center text-sm px-4 gap-2 bg-zinc-500 m-3">
        <h2>{conditions}</h2>
        <p>feels like {(((feelslike - 32) * 5) / 9).toFixed(0)} °C</p>
      </div>
    </div>
  );
}

export default SmallCard;
