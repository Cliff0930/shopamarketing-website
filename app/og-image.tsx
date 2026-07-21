import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared 1200x630 social-share card used by both app/opengraph-image.tsx and
// app/twitter-image.tsx. Fonts are bundled locally (assets/fonts) so rendering
// never depends on the network — see [[feedback-scrub-video-pipeline]] sibling
// reliability note. Brand palette pulled from globals.css: #663dff / #0f0926 / #f08441.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function renderOgImage() {
  const [bold, semibold] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Montserrat-Bold.woff")),
    readFile(join(process.cwd(), "assets/fonts/Montserrat-SemiBold.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0f0926",
          backgroundImage:
            "radial-gradient(circle at 82% 18%, #663dff 0%, rgba(102,61,255,0) 55%), linear-gradient(135deg, #0f0926 0%, #1a0f3d 100%)",
          fontFamily: "Montserrat",
          color: "#ffffff",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Shopa Marketing
          </div>
        </div>

        {/* Headline block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Marketing that grows your business.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              width: 120,
              height: 8,
              borderRadius: 8,
              backgroundColor: "#f08441",
            }}
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              marginTop: 30,
              color: "#ece8fc",
            }}
          >
            SEO · Social Media · Google Ads · Websites · OOH
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#c9bff5",
          }}
        >
          shopamarketing.com.au
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: bold, weight: 700, style: "normal" },
        { name: "Montserrat", data: semibold, weight: 600, style: "normal" },
      ],
    }
  );
}
