"use client";

import { useEffect } from "react";

const LogFetch = () => {
  useEffect(() => {
    // Fetch the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();

        // Log the JSON data to the console
        console.log("Fetched Data:", jsonData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []); // Run on component mount

  return null; // No UI rendering
};

export default LogFetch;
