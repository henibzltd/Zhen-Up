import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 14,
        }}
      >
        <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
          <path
            d="M30 24 V60 A20 20 0 0 0 70 60 V44"
            stroke="#00bf63"
            strokeWidth="15"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M56 50 L84 18 M84 18 L84 34 M84 18 L68 18"
            stroke="#00bf63"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
