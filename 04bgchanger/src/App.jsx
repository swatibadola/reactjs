import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full duration-200" style={{backgroundColor: color, height: 700}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-5 bg-white shadow-lg px-3 py-2 rounded-2xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")}  className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("yellow")}  className="outline-none px-4 py-1 text-black rounded-full" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("black")}  className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("brown")}  className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor: "brown"}}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
