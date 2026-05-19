import { ImageResponse } from "next/og";

export const alt = "Screen Candy launching soon on Product Hunt";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgb(252, 250, 255) 0%, rgb(241, 232, 255) 55%, rgb(226, 215, 255) 100%)",
          padding: "64px",
          color: "#111111",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              height: 56,
              width: 56,
              borderRadius: 18,
              background: "#6d28d9",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            SC
          </div>
          <div style={{ display: "flex" }}>Screen Candy</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: "920px",
            }}
          >
            Cinematic screen recordings for demos, tutorials, and social video.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#4b5563",
              maxWidth: "880px",
            }}
          >
            Launching soon on Product Hunt. Built for macOS, Windows, and Linux.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 9999,
              background: "rgba(109, 40, 217, 0.12)",
              color: "#6d28d9",
              padding: "16px 24px",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Launching Soon on Product Hunt
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#374151",
            }}
          >
            screencandy.app
          </div>
        </div>
      </div>
    ),
    size
  );
}
