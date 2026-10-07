import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "WebNex";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  const navy = "#0A1A3D";
  const blue = "#009DFF";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#05080F",
          borderRadius: 96,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 0 80px rgba(0,157,255,0.18)",
        }}
      >
        <svg
          width="340"
          height="300"
          viewBox="0 0 90 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4 L26 76 L40 36 L50 60 L22 0 L0 4 Z" fill={navy} />
          <path d="M36 72 L64 4 L88 4 L88 76 L64 76 L50 42 L44 56 L36 72 Z" fill={blue} />
        </svg>
      </div>
    ),
    { ...size }
  );
}
