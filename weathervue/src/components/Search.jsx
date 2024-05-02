import { useState } from "react"


function Search({handleSearch}) {
const [input, setInput] = useState()
 
  return (
    <div className="flex align-middle justify-center  p-4 " >
        <input onChange={(e) => setInput(e.target.value)} className=" bg-neutral-500 w-3/6 md:w-3/12 h-11 rounded-lg focus:no-underline no-underline text-center mr-8" type="search" placeholder="type country or city(noida,up)" />
        <button onClick={()=> handleSearch(input)} className="self-center bold bg-orange-300 px-4 py-2 rounded-md">search</button>
    </div>
  )
}

export default Search