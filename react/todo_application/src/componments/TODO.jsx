import React from "react";

const TODO = () => {
  return (
    <div className="cointainer min-h-[80vh] w-3/4 m-auto my-7 bg-slate-700">
      <h1>My Todo List</h1>
      <div className="head flex gap-3 w-full px-10 my-2">
        <input
          type="text"
          className="bg-transparent p-1 border w-3/4 border-gray-400"
          placeholder="Add a new task"
        />
        <button className="bg-gray-500 p-1 px-2 hover:bg-gray-400 ">Add</button>
      </div>
      <div className="todos">
        <div className="todo">
            <span>Lorem ipsum dolor sit amet consectetu.</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TODO;
