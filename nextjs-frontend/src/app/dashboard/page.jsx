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
  return (
    <div className="flex flex-col items-center w-full mt-8">
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