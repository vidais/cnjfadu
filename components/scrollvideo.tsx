"use client";

import { useEffect, useRef } from "react";

export function ScrollVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // autoplay might fail if browser blocks it
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // play when 50% of video is visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full h-full max-w-sm aspect-[9/16] mx-auto">
      <video
        ref={videoRef}
        src={src}
        controls
        //muted autoplay usually requires muted
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
}

