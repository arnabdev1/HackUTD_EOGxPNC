"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/echo", {
        input,
      });
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  return (
    <div>
      <h1>Echo Input</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
      {output && <p>Output: {output}</p>}
    </div>
  );
}
