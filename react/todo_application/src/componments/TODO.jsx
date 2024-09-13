import React, { useEffect, useState } from "react";

const TODO = () => {
  const [todos, settodos] = React.useState([]);
  const [todo, settodo] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(null);
  const [finished, setFinished] = useState(false);

  const handleFinishedChange = () => {
    setFinished(!finished);
  };
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && Array.isArray(storedTodos)) {
      settodos(storedTodos);
    }
  }, []);
  let save_db = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const handleEdit = (index) => {
    settodo(todos[index].todo);
    setEditIndex(index);
    save_db();
  };
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove todo by index
    settodos(newTodos);
    save_db();
  };
  const inputChange = (e) => {
    settodo(e.target.value);
  };
  const handle_checkbox = (index) => {
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted; // Toggle isCompleted
    settodos(newTodos);
    save_db();
  };
  const handleAdd = () => {
    if (todo.trim() === "") return;
    else if (editIndex !== null) {
      let updatedTodos = [...todos];
      updatedTodos[editIndex].todo = todo;
      settodos(updatedTodos);
      setEditIndex(null);
    } else {
      settodos([...todos, { todo, isCompleted: false }]);
      // console.log(todo);
    }
    settodo("");
    save_db();
  };
  const displayTodos = (to) => {
    return to.map((item, index) => (
      <div key={index} className="flex">
        <div className="flex items-center gap-2">
          <input
            onChange={() => handle_checkbox(index)}
            id={`checkbox-${index}`}
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-700"
            checked={item.isCompleted}
          />
        </div>
        <div className="flex gap-3 py-2 w-5/6 m-auto my-2 justify-between border bg-gray-800 rounded-xl">
          <span className={`px-5 ${item.isCompleted ? "line-through" : ""}`}>
            {item.todo}
          </span>
          <div className="but flex gap-3 px-4">
            <button
              onClick={() => handleEdit(index)}
              className="bg-yellow-500 rounded-md py-1 px-3"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 rounded-md py-1 px-3"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container min-h-[80vh] w-3/4 m-auto my-7 p-3 bg-slate-700">
      <h1>My Todo List</h1>
      <div className="head flex gap-3 w-full px-10 my-2">
        <input
          value={todo}
          onChange={inputChange}
          type="text"
          className="bg-transparent p-1 border w-3/4 border-gray-400"
          placeholder="Add a new task"
        />
        <button
          onClick={handleAdd}
          className="bg-gray-500 p-1 px-2 hover:bg-gray-400"
        >
          {editIndex !== null ? "Save" : "Add"}
        </button>
      </div>
      <div className="todos">
        {todos.length === 0 ? (
          <p className="w-full text-white flex items-center justify-center m-5 text-xl font-bold">
            No tasks found
          </p>
        ) : (
          <>
            <div className="flex justify-end items-center px-2 text-lg w-[97%] m-auto">
              <input
                type="checkbox"
                name="finished"
                checked={finished}
                onChange={handleFinishedChange}
              />
              <span className="flex gap-2 px-3">Show Finished Task</span>
            </div>
            {finished ? (
              todos.filter((item) => item.isCompleted).length === 0 ? (
                <span className="flex w-full items-center justify-center text-2xl font-bold text-red-700 my-6">No Finished Tasks</span>
              ) : (
                displayTodos(todos.filter((item) => item.isCompleted))
              )
            ) : (
              displayTodos(todos)
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default TODO;
