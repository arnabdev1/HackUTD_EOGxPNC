"use client";
import { useState, useEffect } from "react";
import SmoothProgressBar from "./Hydration";
import { CiViewBoard } from "react-icons/ci";

const Progress = ({ onViewDetails }) => {
  const [tasks, setTasks] = useState([]);
  const [alerts, setAlerts] = useState([]); // Manage stacked alerts

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/pipes");
      const data = await response.json();

      const transformedTasks = data.map((pipe) => ({
        id: pipe.id,
        name: pipe.id,
        workDone: 0,
        workRemaining: pipe.hydration_time,
        progress: 0,
        isHydrated: pipe.is_hydrated,
      }));

      setTasks(transformedTasks);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const addAlert = (message) => {
    setAlerts((prevAlerts) => [...prevAlerts, message]);
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.slice(1));
    }, 99999); // Remove alert after 3 seconds
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-row justify-center items-center">
      <div className="flex flex-col items-center justify-center w-[70%]">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="w-[700px] flex flex-row justify-center items-center bg-rose-500 bg-opacity-15 p-4 rounded-lg shadow-lg mb-4 transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <SmoothProgressBar
              task={task}
              hydrationFlag={task.isHydrated}
              onTaskAlert={addAlert} // Pass alert handler
            />
            <button
              onClick={onViewDetails}
              className="border-[2px] border-white bg-transparent rounded-md flex flex-row p-2 hover:bg-black hover:border-none duration-200 hover:text-white font-bold transition-colors"
            >
              <span className="text-white mr-2">View Details</span>
            </button>
          </div>
        ))}
      </div>
      

      {/* Alert Notification Stack */}
      <div className="fixed bottom-4 left-4 flex flex-col space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="p-4 bg-red-700 text-white rounded-lg shadow-lg flex items-center space-x-2"
          >
            <span>{alert}</span>
            <button
              className="ml-4 text-white rounded-full p-1 "
              onClick={() => setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index))}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
