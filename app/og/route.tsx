import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 48%, #1d4ed8 100%)",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Truestack
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: "rgba(255,255,255,0.93)",
            maxWidth: 920,
            lineHeight: 1.35,
            fontWeight: 500,
          }}
        >
          KPKT services & fintech software for licensed money lenders in Malaysia
        </div>
        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignSelf: "flex-start",
            padding: "10px 22px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.16)",
            fontSize: 26,
            color: "white",
            fontWeight: 600,
          }}
        >
          Book a free consultation
        </div>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 48,
            fontSize: 24,
            color: "rgba(255,255,255,0.78)",
            fontWeight: 500,
          }}
        >
          truestack.my
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
