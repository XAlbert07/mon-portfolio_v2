import { ImageResponse } from "next/og";

import { siteConfig } from "./site-config";

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
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "56px",
          background: "#0a0a0a",
          color: "#f0ede6",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(240,237,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,230,0.05) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "8%",
            top: "18%",
            width: 380,
            height: 380,
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(200,240,74,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {siteConfig.name}
              <span style={{ color: "#c8f04a" }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 112,
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              <span>Developpeur</span>
              <span style={{ color: "#c8f04a" }}>Frontend</span>
              <span>React & Next.js</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              maxWidth: "70%",
              fontSize: 28,
              color: "rgba(240,237,230,0.72)",
            }}
          >
            <span>{siteConfig.description}</span>
            <span style={{ color: "#c8f04a", fontSize: 20, letterSpacing: "0.18em" }}>
              MISSIONS REMOTE • REACT • NEXT.JS
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
