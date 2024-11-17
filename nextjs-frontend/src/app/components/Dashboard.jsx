
import { useState } from "react";
import Graph from "./Graph";
import RiskMeter from "./RiskMeter";

const Dashboard = ({home}) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const riskPercentage = 90;


  const dummyData = [
    { time: "00:00", valve_open_percentage: 45 },
    { time: "00:06", valve_open_percentage: 50 },
    { time: "00:12", valve_open_percentage: 52 },
    { time: "00:18", valve_open_percentage: 48 },
    { time: "00:24", valve_open_percentage: 47 },
    { time: "00:30", valve_open_percentage: 53 },
    { time: "00:36", valve_open_percentage: 49 },
    { time: "00:42", valve_open_percentage: 55 },
    { time: "00:48", valve_open_percentage: 60 },
    { time: "00:54", valve_open_percentage: 58 },
    { time: "01:00", valve_open_percentage: 56 },
    { time: "01:06", valve_open_percentage: 54 },
    { time: "01:12", valve_open_percentage: 50 },
    { time: "01:18", valve_open_percentage: 59 },
    { time: "01:24", valve_open_percentage: 61 },
    { time: "01:30", valve_open_percentage: 62 },
    { time: "01:36", valve_open_percentage: 60 },
    { time: "01:42", valve_open_percentage: 65 },
    { time: "01:48", valve_open_percentage: 63 },
    { time: "01:54", valve_open_percentage: 67 },
    { time: "02:00", valve_open_percentage: 70 },
    { time: "02:06", valve_open_percentage: 72 },
    { time: "02:12", valve_open_percentage: 75 },
    { time: "02:18", valve_open_percentage: 78 },
    { time: "02:24", valve_open_percentage: 77 },
    { time: "02:30", valve_open_percentage: 76 },
    { time: "02:36", valve_open_percentage: 80 },
    { time: "02:42", valve_open_percentage: 82 },
    { time: "02:48", valve_open_percentage: 81 },
    { time: "02:54", valve_open_percentage: 83 },
    { time: "03:00", valve_open_percentage: 85 },
    { time: "03:06", valve_open_percentage: 87 },
    { time: "03:12", valve_open_percentage: 88 },
    { time: "03:18", valve_open_percentage: 90 },
    { time: "03:24", valve_open_percentage: 92 },
    { time: "03:30", valve_open_percentage: 91 },
    { time: "03:36", valve_open_percentage: 93 },
    { time: "03:42", valve_open_percentage: 94 },
    { time: "03:48", valve_open_percentage: 95 },
    { time: "03:54", valve_open_percentage: 96 },
    { time: "04:00", valve_open_percentage: 97 },
    { time: "04:06", valve_open_percentage: 98 },
    { time: "04:12", valve_open_percentage: 99 },
    { time: "04:18", valve_open_percentage: 100 },
    { time: "04:24", valve_open_percentage: 98 },
    { time: "04:30", valve_open_percentage: 97 },
    { time: "04:36", valve_open_percentage: 95 },
    { time: "04:42", valve_open_percentage: 94 },
    { time: "04:48", valve_open_percentage: 92 },
    { time: "04:54", valve_open_percentage: 90 },
    { time: "05:00", valve_open_percentage: 88 },
    { time: "05:06", valve_open_percentage: 85 },
    { time: "05:12", valve_open_percentage: 84 },
    { time: "05:18", valve_open_percentage: 82 },
    { time: "05:24", valve_open_percentage: 81 },
    { time: "05:30", valve_open_percentage: 80 },
    { time: "05:36", valve_open_percentage: 78 },
    { time: "05:42", valve_open_percentage: 77 },
    { time: "05:48", valve_open_percentage: 75 },
    { time: "05:54", valve_open_percentage: 74 },
    { time: "06:00", valve_open_percentage: 73 },
    { time: "06:06", valve_open_percentage: 72 },
    { time: "06:12", valve_open_percentage: 71 },
    { time: "06:18", valve_open_percentage: 70 },
    { time: "06:24", valve_open_percentage: 68 },
    { time: "06:30", valve_open_percentage: 66 },
    { time: "06:36", valve_open_percentage: 65 },
    { time: "06:42", valve_open_percentage: 64 },
    { time: "06:48", valve_open_percentage: 63 },
    { time: "06:54", valve_open_percentage: 61 },
    { time: "07:00", valve_open_percentage: 60 },
    { time: "07:06", valve_open_percentage: 58 },
    { time: "07:12", valve_open_percentage: 57 },
    { time: "07:18", valve_open_percentage: 55 },
    { time: "07:24", valve_open_percentage: 53 },
    { time: "07:30", valve_open_percentage: 51 },
    { time: "07:36", valve_open_percentage: 50 },
    { time: "07:42", valve_open_percentage: 49 },
    { time: "07:48", valve_open_percentage: 47 },
    { time: "07:54", valve_open_percentage: 46 },
    { time: "08:00", valve_open_percentage: 45 },
    { time: "08:06", valve_open_percentage: 43 },
    { time: "08:12", valve_open_percentage: 42 },
    { time: "08:18", valve_open_percentage: 40 },
    { time: "08:24", valve_open_percentage: 39 },
    { time: "08:30", valve_open_percentage: 38 },
    { time: "08:36", valve_open_percentage: 36 },
    { time: "08:42", valve_open_percentage: 35 },
    { time: "08:48", valve_open_percentage: 34 },
    { time: "08:54", valve_open_percentage: 32 },
    { time: "09:00", valve_open_percentage: 31 },
    { time: "09:06", valve_open_percentage: 30 },
    { time: "09:12", valve_open_percentage: 29 },
    { time: "09:18", valve_open_percentage: 28 },
    { time: "09:24", valve_open_percentage: 27 },
    { time: "09:30", valve_open_percentage: 26 },
    { time: "09:36", valve_open_percentage: 25 },
    { time: "09:42", valve_open_percentage: 24 },
    { time: "09:48", valve_open_percentage: 23 },
    { time: "09:54", valve_open_percentage: 22 },
    { time: "10:00", valve_open_percentage: 21 },
    { time: "10:06", valve_open_percentage: 20 },
    { time: "10:12", valve_open_percentage: 19 },
    { time: "10:18", valve_open_percentage: 18 },
    { time: "10:24", valve_open_percentage: 17 },
    { time: "10:30", valve_open_percentage: 16 },
    { time: "10:36", valve_open_percentage: 15 },
    { time: "10:42", valve_open_percentage: 14 },
    { time: "10:48", valve_open_percentage: 13 },
    { time: "10:54", valve_open_percentage: 12 },
    { time: "11:00", valve_open_percentage: 11 },
    { time: "11:06", valve_open_percentage: 10 },
    { time: "11:12", valve_open_percentage: 9 },
    { time: "11:18", valve_open_percentage: 8 },
    { time: "11:24", valve_open_percentage: 7 },
    { time: "11:30", valve_open_percentage: 6 },
    { time: "11:36", valve_open_percentage: 5 },
    { time: "11:42", valve_open_percentage: 4 },
    { time: "11:48", valve_open_percentage: 3 },
    { time: "11:54", valve_open_percentage: 2 },
  ];

  const yKeysConfig = {
    valve_open_percentage: {
      label: "Valve Open Percentage",
      color: "hsl(var(--chart-1))", // Or any other color
    },
  };
  return (
    <div className="flex flex-col w-full h-auto p-3">
      <button className="w-[80px]  transition-all duration-200 px-3 py-2 rounded-xl text-lg border-white border-2 hover:border-transparent text-white bg-opacity-35  hover:scale-110 hover:bg-black hover:text-white font-bold active:rose-500 focus:outline-none focus:text-white active:text-black focus:ring focus:ring-[#ffffff]" onClick={home}>Back</button>
        
      <div className="flex flex-row items-center justify-center w-full min-h-screen bg-transparent gap-5">
        <div className="flex flex-col items-center justify-center w-[70%] gap-5">
        <div className="flex flex-row items-center justify-center w-full gap-10">
          <Graph
            title="Valve Open Percentage Over Time"
            description="Showing valve open percentage over a 12-hour period"
            data={dummyData}
            xKey="time"
            yKeys={yKeysConfig}
            footer={
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            }
          />
          <Graph
            title="Valve Open Percentage Over Time"
            description="Showing valve open percentage over a 12-hour period"
            data={dummyData}
            xKey="time"
            yKeys={yKeysConfig}
            footer={
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            }
          />

        </div>
        <div className="flex flex-row items-center justify-center w-full gap-10">
          <Graph
            title="Valve Open Percentage Over Time"
            description="Showing valve open percentage over a 12-hour period"
            data={dummyData}
            xKey="time"
            yKeys={yKeysConfig}
            footer={
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            }
          />
          <Graph
            title="Valve Open Percentage Over Time"
            description="Showing valve open percentage over a 12-hour period"
            data={dummyData}
            xKey="time"
            yKeys={yKeysConfig}
            footer={
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - June 2024
                </div>
              </div>
            }
          />

        </div>
      </div>
      
      <RiskMeter percentage={riskPercentage} />
      
    </div>
    </div>
    
  )
}

export default Dashboard