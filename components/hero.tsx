"use client";

import Image from "next/image"; 
import { ArrowDown } from "lucide-react";
import Link from "next/link";


interface HeroProps {
  mainImage: string;
  topLeftImage: string;
  bottomRightImage: string;
  altMain?: string;
  altTopLeft?: string;
  altBottomRight?: string;
}

export function Hero({
  mainImage,
  topLeftImage,
  bottomRightImage,
  altMain = "Main image",
  altTopLeft = "Top left image",
  altBottomRight = "Bottom right image",
}: HeroProps) {
  return (
    <section className="relative w-full flex items-center justify-center min-h-screen ">
      
      {/* Main Center Image */}
      <div className="relative w-80 sm:w-96 md:w-[500px] lg:w-[600px]">
        <Image
          src={mainImage}
          alt={altMain}
          width={600}
          height={600}
          className="w-full h-auto object-contain rounded-lg"
        />

        {/* Top-left small image */}
        <div className="absolute -top-90 -left-110 w-64 h-64 sm:w-128 sm:h-128">
          <Image
            src={topLeftImage}
            alt={altTopLeft}
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom-right small image */}
        <div className="absolute -bottom-80 -right-110 w-64 h-64 sm:w-128 sm:h-128">
          <Image
            src={bottomRightImage}
            alt={altBottomRight}
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

<div
  className="absolute bottom-16 left-24 -translate-x-1/2 animate-bounce cursor-pointer"
  onClick={() => {
    window.scrollBy({
      top: window.innerHeight*1.05, // scroll down by one viewport height
      behavior: "smooth",
    });
  }}
>
  <ArrowDown className="w-24 h-24 text-white" />
</div>

</section>
  );
}

