
import React, { useState } from "react";

const App = () => {

  const[heading,setHeading] = useState("")
  const[details,setDetails] = useState("")

  const[task,setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task]
    copyTask.push({heading,details})
    setTask(copyTask)

    console.log(task)

    setHeading("")
    setDetails("")
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">

      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl font-bold">
          My Notes App
        </h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          onChange={(e) => setHeading(e.target.value) }
          value={heading}
        />
        <textarea
          placeholder="Write Details"
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded"
          onChange={(e) => setDetails(e.target.value) }
          value={details}
        />
        <button className="bg-white font-medium w-full active:scale-95 outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">
          Recent Notes
        </h1>
        <div className="flex flex-wrap gap-5 items-start justify-start mt-5 h-full overflow-auto">
          
          {task.map(function(el,idx){
            return <div className="h-52 w-40 bg-cover rounded-2xl text-black p-4  bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"  key={idx}>
              <h1 className="leading-tight text-xl font-bold">
                {el.heading}
              </h1>
              <br />
              <p className="leading-tight font-semibold">
                {el.details}
              </p>
            </div>
          })}
        </div>
      </div>

    </div>
  );
};

export default App;
