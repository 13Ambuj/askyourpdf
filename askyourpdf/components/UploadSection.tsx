
'use client'
import React, { useState } from "react";

export function UploadSection() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("pdf", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold mb-2">Upload your PDF</label>
      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Upload</button>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
