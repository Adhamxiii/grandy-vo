"use client";

import Image from "next/image";

export function AudioVisualizer() {
  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-60 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <Image
            src="/omar.jpeg"
            alt="Voice Artist Avatar"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
