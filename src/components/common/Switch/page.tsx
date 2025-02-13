"use client"
import { useState } from "react";

export default function Switch() {
    const [enabled, setEnabled] = useState(false);

    return (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`relative w-[52px] h-6 flex items-center rounded-full p-1 transition-colors ${enabled ? "bg-green-500" : "bg-gray-300"
                }`}
        >
            <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-6" : "translate-x-0"
                    }`}
            />
        </button>
    );
}
