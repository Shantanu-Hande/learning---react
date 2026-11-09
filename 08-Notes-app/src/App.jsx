import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const update = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="h-screen bg-black  text-white p-5 ">
      <form
        className=" flex flex-col justify-between items-start p-5 "
        onSubmit={submitHandler}
        >
        <p className="p-5 text-5xl font-bold">
          Welcome to My Notes App
        </p>
        <div className=" flex w-1/2 flex-col items-start p-5 gap-4">
          <input
            type="text"
            placeholder="Enter Note Heading"
            className="px-5 py-3 w-full border-2 font-medium rounded border-white outline-none text-xl"
            onChange={update}
          />
          <textarea
            type="text"
            placeholder="Enter Details"
            className="px-5 py-3 h-32 w-full border-2 font-medium rounded border-white outline-none text-xl"
            onChange={update}
          />
          <button className="px-5 py-3  w-full rounded font-medium bg-white text-black outline-none text-xl">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
