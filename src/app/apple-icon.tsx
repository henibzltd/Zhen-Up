import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
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
