import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ heading, details });
    setTask(copyTask);

    setHeading("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
    console.log("Note Deleted")
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl font-bold">My Notes App</h1>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
        />
        <textarea
          placeholder="Write Details"
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded"
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        />
        <button className="bg-white font-medium w-full active:scale-95 outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 items-start justify-start mt-5 h-full overflow-auto">
          {task.map(function (el, idx) {
            return (
              <div
                className="flex flex-col h-52 w-40 rounded-2xl text-black p-4
                bg-cover bg-center overflow-hidden bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
                key={idx}
              >
                {/* Heading */}
                <h1 className="text-lg font-bold leading-tight break-word text-center">
                  {el.heading}
                </h1>

                {/* Details */}
                <p className="mt-3 text-sm font-semibold leading-relaxed break-word [overflow-wrap:anywhere] flex-1 overflow-y-auto w-full">
                  {el.details}
                </p>

                {/* Delete Button */}
                <button className="w-full bg-red-500 text-black active:scale-95 text-base font-bold py-1 rounded-sm hover:bg-red-600 transition"
                onClick={() => deleteNote(idx)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
