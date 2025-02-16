"use client";
import { useState } from "react";

export default function Switch({ isAvailable = false }) {
  console.log({ isAvailable });

  const [enabled, setEnabled] = useState(isAvailable);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative flex h-6 w-[52px] items-center rounded-full p-1 transition-colors ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`h-5 w-5 transform rounded-full bg-white shadow-md transition-transform ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
