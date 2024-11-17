import { useEffect, useState } from "react";

export default function HydrationProgressBar({ task }) {
  const [progress, setProgress] = useState(task.progress);
  const [timeLeft, setTimeLeft] = useState(task.workRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
      setProgress((prev) => Math.min(100, prev + (100 / task.workRemaining)));
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [task.workRemaining, timeLeft]);

  useEffect(() => {
    setProgress((task.workDone / task.workRemaining) * 100);
    setTimeLeft(task.workRemaining);
  }, [task.workRemaining]);

  return (
    <div className="w-full p-2">
      <div className="flex justify-between mb-2">
        <span>{task.name}</span>
    
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
            <span>{timeLeft}s</span>
      </div>
    </div>
  );
}
