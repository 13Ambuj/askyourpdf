
'use client'
import React, { useState } from "react";

export function ChatSection() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    const res = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="mt-10">
      <label className="block text-lg font-semibold mb-2">Ask a question about your PDF</label>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border px-4 py-2 w-full mb-2"
        placeholder="e.g., What is the summary of section 2?"
      />
      <button onClick={handleAsk} className="bg-green-600 text-white px-4 py-2 rounded">Ask</button>
      {answer && <div className="mt-4 p-4 bg-gray-100 rounded shadow"><strong>Answer:</strong> {answer}</div>}
    </div>
  );
}
