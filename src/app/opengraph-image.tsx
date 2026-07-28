import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

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
          background:
            "radial-gradient(circle at top left, rgba(34,211,238,0.35), transparent 34%), linear-gradient(135deg, #020617 0%, #0f172a 55%, #082f49 100%)",
          color: "#f8fafc",
          fontFamily: "Inter, Arial, sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "36px",
            padding: "44px",
            background: "rgba(15, 23, 42, 0.62)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#67e8f9",
              }}
            >
              Portafolio profesional
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 68,
                lineHeight: 1.05,
                fontWeight: 800,
                maxWidth: "760px",
              }}
            >
              {portfolio.fullName}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 32,
                lineHeight: 1.3,
                maxWidth: "900px",
                color: "#cbd5e1",
              }}
            >
              {portfolio.professionalTitle}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 26,
                lineHeight: 1.4,
                maxWidth: "760px",
                color: "#94a3b8",
              }}
            >
              Desarrollo de software, automatización y experiencias web modernas con foco en claridad, impacto y evolución continua.
            </div>
            <div
              style={{
                display: "flex",
                padding: "18px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(103, 232, 249, 0.35)",
                background: "rgba(34, 211, 238, 0.12)",
                color: "#ecfeff",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              Next.js · React · IA aplicada
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
