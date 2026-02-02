"use client";

interface PdfEmbedProps {
  src: string;
  width?: string | number;
  height?: string | number;
  title?: string;
}

export default function PdfEmbed({
  src,
  width = "100%",
  height = "800px",
  title = "PDF Document",
}: PdfEmbedProps) {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      frameBorder={0}
      scrolling="no"
      allowFullScreen
      title={title}
    />
  );
}

