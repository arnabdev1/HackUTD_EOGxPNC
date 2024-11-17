import { useEffect, useState } from "react";

export default function SmoothProgressBar({ task, hydrationFlag, onTaskAlert }) {
  const [progress, setProgress] = useState(0); // Start at 0%
  const [timeLeft, setTimeLeft] = useState(task.workRemaining); // Remaining time in seconds

  useEffect(() => {
    setProgress(0);
    setTimeLeft(task.workRemaining);

    if (hydrationFlag) {
      // If the flag is true, instantly finish the progress bar
      setProgress(100);
      setTimeLeft(0);
      onTaskAlert(`${task.name} hydrated`); // Send alert to parent
      return;
    }

    const startTime = Date.now();
    const totalTime = task.workRemaining * 1000;

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentProgress = Math.min((elapsedTime / totalTime) * 100, 100);
      setProgress(currentProgress);

      const remainingTime = Math.max(Math.ceil((totalTime - elapsedTime) / 1000), 0);
      setTimeLeft(remainingTime);

      if (currentProgress >= 100) {
        clearInterval(interval);
        onTaskAlert(`${task.name} hydrated`);
      }
    }, 16);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [task.workRemaining, hydrationFlag]);

  const getBarColor = () => {
    if (timeLeft > task.workRemaining * 0.5) return "bg-green-500";
    if (timeLeft > task.workRemaining * 0.2) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-bold">{task.name}</h3>
        <p className="text-sm text-gray-400">
          Time remaining: <span className="font-semibold text-white">{timeLeft}s</span>
        </p>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-6 relative overflow-hidden">
        <div
          className={`h-6 rounded-full ${getBarColor()} transition-all duration-[16ms]`}
          style={{ width: `${progress}%` }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-black">
          {progress.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}
