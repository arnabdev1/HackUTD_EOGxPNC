"use client";
import Dashboard from "./components/Dashboard";
import Progress from "./components/Progress";

export default function Home() {

  return (
    <div className="flex flex-col items-center w-full mt-8">
      <Progress />
      <Dashboard/>
    </div>
  );
}
