import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ZhenUp Digital — Performance Marketing That Pays For Itself";

export default async function OpengraphImage() {
  const logoBuffer = await readFile(
    path.join(process.cwd(), "public/brand/logo-icon.png"),
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(0,191,99,0.35), transparent 45%), radial-gradient(circle at 82% 85%, rgba(0,191,99,0.25), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={logoSrc} width={76} height={89} alt="" />
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, color: "#ffffff" }}>
            Zhen<span style={{ color: "#00bf63" }}>Up</span>
            <span
              style={{
                fontSize: 22,
                color: "#94a3b8",
                marginLeft: 16,
                alignSelf: "center",
                letterSpacing: 6,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Digital
            </span>
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#e2e8f0",
            maxWidth: 880,
            textAlign: "center",
            display: "flex",
          }}
        >
          Performance marketing that pays for itself.
        </div>
      </div>
    ),
    { ...size },
  );
}
