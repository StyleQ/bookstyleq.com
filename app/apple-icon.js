import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon: the StyleQ brand leaf on the rose brand color.
// iOS applies its own corner mask, so the background fills the full square.
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
          backgroundColor: "#C65B89",
        }}
      >
        <svg width="104" height="104" viewBox="0 0 24 24">
          <path
            d="M0 24c0-16 8-24 24-24 0 16-8 24-24 24z"
            fill="#FDF8F2"
          />
        </svg>
      </div>
    ),
    size,
  );
}
