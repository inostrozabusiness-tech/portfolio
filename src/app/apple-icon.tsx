import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 58%, #082f49 100%)",
          borderRadius: "42px",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "78%",
            width: "78%",
            borderRadius: "36px",
            border: "4px solid rgba(248, 250, 252, 0.14)",
            background:
              "radial-gradient(circle at top, rgba(34, 211, 238, 0.28), transparent 55%), rgba(15, 23, 42, 0.82)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#f8fafc",
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-0.08em",
            }}
          >
            BI
          </div>
        </div>
      </div>
    ),
    size,
  );
}
