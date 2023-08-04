import { ImageResponse } from "next/server";

export const size = {
  width: 32,
  height: 32,
};

export const runtime = 'edge'
export const contentType = "image/icon";

export default function Icon() {
  return (
    new ImageResponse(
      (
        <div
          className="
            text-[24px] text-white font-bold w-full h-full flex items-center justify-center
            bg-black
        "
        >
          A
        </div>
      )
    ),
    {
      ...size,
    }
  );
}
