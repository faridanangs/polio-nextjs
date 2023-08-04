import { ImageResponse } from "next/server";
import React from "react";

export const size = {
  widht: 1200,
  height: 600,
};

export const runtime = "edge";

export const alt = "Project Graph";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
        }}
      >
        Project
      </div>
    ),
    {
      ...size,
    }
  );
}
