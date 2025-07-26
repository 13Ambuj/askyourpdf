
import React from "react";
import { UploadSection } from "@/components/UploadSection";
import { ChatSection } from "@/components/ChatSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">AskYourPDF</h1>
        <UploadSection />
        <ChatSection />
      </div>
    </main>
  );
}
