"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Video() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Hero content container */}
      <div className="relative w-full max-w-6xl px-4 flex flex-col items-center">

        {/* Video container */}
        <div className="relative w-full max-w-sm aspect-[9/16] mt-16">
          <video
            src="video.mp4" // replace with your local path
            controls
            className="max-w-full max-h-full rounded-lg object-contain"
          />

          {/* Image overlapping bottom-left corner */}
          <div className="absolute bottom-12 left-0 -mb-8 -ml-64 w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden">
            <Image
              src="/images/juntos_c_verde.png"
              alt="Overlay Image"
              width={500}
              height={160}
              className="w-full h-full object-contain"
            />
          </div>
        </div>


      </div>
    </section>
  );
}

