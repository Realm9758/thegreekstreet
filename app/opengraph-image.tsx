import { ImageResponse } from "next/og";

export const alt = "Greek Street Waltham Cross — big Greek flavour, right on your street";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#0756a0",
          color: "#fff8e9",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          padding: "64px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,.07) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.07) 50%, rgba(255,255,255,.07) 75%, transparent 75%)",
            backgroundSize: "52px 52px",
            display: "flex",
            inset: 0,
            opacity: 0.55,
            position: "absolute",
          }}
        />
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between", zIndex: 1 }}>
          <div style={{ color: "#f7be38", display: "flex", fontSize: 25, fontWeight: 700, letterSpacing: 4 }}>
            GYROS · SOUVLAKI · WALTHAM CROSS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 112, fontWeight: 900, letterSpacing: -6, lineHeight: 0.9 }}>
              GREEK STREET
            </div>
            <div style={{ color: "#f7be38", display: "flex", fontSize: 58, fontWeight: 800, marginTop: 22 }}>
              Big Greek flavour. Right on your street.
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 27 }}>260 High Street · Waltham Cross · EN8 7EA</div>
        </div>
      </div>
    ),
    size,
  );
}
