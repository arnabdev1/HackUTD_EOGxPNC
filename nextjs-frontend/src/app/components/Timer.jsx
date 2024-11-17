import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Timer = ({ countdownTime }) => {
  const [timeLeft, setTimeLeft] = useState(countdownTime); // Time in seconds
  const [isRunning, setIsRunning] = useState(true);

  // Start the countdown when the component is mounted
  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false); // Stop the timer when it reaches zero
    }

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isRunning, timeLeft]);

  // Calculate the progress for the circular progress bar
  const progress = (timeLeft / countdownTime) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-5 w-[300px] ">
      <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
        Countdown Timer
      </h1>

      {/* Circular Progress Bar */}
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={progress}
          text={`${timeLeft}s`}
          styles={buildStyles({
            pathColor: '#4CAF50', // Green color for the progress bar
            textColor: '#4CAF50', // Text color inside the circle
            trailColor: '#e0e0e0', // Light grey trail color
            strokeWidth: 8, // Thickness of the circular progress bar
          })}
        />
      </div>

      {/* Timer Controls */}
      {/* <div className="mt-4">
        {isRunning ? (
          <button
            onClick={() => setIsRunning(false)}
            className="px-6 py-2 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600"
          >
            Pause
          </button>
        ) : timeLeft === 0 ? (
          <button
            onClick={() => setTimeLeft(countdownTime)} // Reset timer
            className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600"
          >
            Restart
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(true)}
            className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600"
          >
            Start
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Timer;
