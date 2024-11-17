"use client";
import { useState, useEffect } from "react";
import HydrationProgressBar from "./Hydration";
import { CiViewBoard } from "react-icons/ci";

const Progress = ({ onViewDetails }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/pipes");
        const data = await response.json();

        // Transform the API data into the format required by HydrationProgressBar
        const transformedTasks = data.map((pipe) => ({
          id: pipe.id, // Use `id` from the API as both id and name
          name: pipe.id,
          workDone: 0, // Default to 0 as no work has been done yet
          workRemaining: pipe.hydration_time, // Map `hydration_time` to `workRemaining`
          progress: 0, // Initial progress
          isHydrated: pipe.is_hydrated, // Add `is_hydrated` from the API
        }));

        setTasks(transformedTasks);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-8">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="w-[700px] flex flex-row justify-center items-center bg-[#ff0000] bg-opacity-20 p-4 rounded-lg shadow-lg mb-4"
        >
          <HydrationProgressBar task={task} hydrationFlag={task.isHydrated} />
          <button onClick={onViewDetails} className="border-[1px] border-white bg-transparent rounded-md flex flex-row p-2 hover:bg-black hover:border-none duration-200 hover:text-black transition-colors">
            <span className="text-white mr-2">View Details</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Progress;
