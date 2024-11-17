"use client";
import { useState, useEffect } from "react";
import HydrationProgressBar from "./components/Hydration";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskWork, setNewTaskWork] = useState("");

  const addTask = () => {
    if (!newTaskName || newTaskWork <= 0) return; // Prevent invalid tasks
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: prevTasks.length + 1,
        name: newTaskName,
        workDone: 0,
        workRemaining: newTaskWork,
        progress: 0,
      },
    ]);
    setNewTaskName("");
    setNewTaskWork("");
  };

  return (
    <div className="flex flex-col items-center w-full mt-8">
      {tasks.map((task) => (
        <div key={task.id} className="w-96">
          <HydrationProgressBar task={task} />
        </div>
      ))}

      {/* Add New Task */}
      <div className="w-full max-w-md mt-8 p-4 bg-gray-100 rounded-md shadow">
        <h3 className="text-lg font-bold mb-4 text-black">Pipe</h3>
        <input
          type="text"
          placeholder="Pipe Name"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md mb-4 text-black"
        />
        <input
          type="number"
          placeholder="Seconds till Hydration"
          value={newTaskWork}
          onChange={(e) => setNewTaskWork(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-md mb-4 text-black"
        />
        <button
          onClick={addTask}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 w-full"
        >
          Add Pipe
        </button>
      </div>
    </div>
  );
}
