"use client";

import { React,useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Progress from "../components/Progress";
import Dashboard from "../components/Dashboard";

const page = () => {
    const [showDashboard, setShowDashboard] = useState(false);

  const toggleView = () => {
    setShowDashboard(!showDashboard);
  };
  const showHome = () => {
    setShowDashboard(false);
  };


  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  return (
    <div className="flex flex-col items-center w-full mt-8">
        <div className="flex flex-col items-center justify-center mt-16 text-white w-full">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">  Upload File for ML Analysis</h1>
        <div className="w-[500px] flex flex-col justify-center items-center bg-rose-500 bg-opacity-15 p-4 rounded-lg shadow-lg mb-4 transform hover:scale-105 transition-transform duration-200 ease-in-out">
          <span className="text-white mr-2 font-bold mb-2 text-[30px]">Add .csv file</span>
          <div>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload CSV</button>
          </div>
        </div>
      </div>
        <AnimatePresence mode="wait">
        {!showDashboard && (
          <motion.div
            key="progress"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Progress onViewDetails={toggleView} />
          </motion.div>
        )}
        {showDashboard && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Dashboard home={showHome}/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default page