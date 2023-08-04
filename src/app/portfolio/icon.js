import { ImageResponse } from 'next/server'

export const size = {
    width: 34,
    height: 34
}

export const runtime = 'edge'
export const contentType = 'image/icon'

export default function Icon() {
  return new ImageResponse(
    <div className='
        w-full h-full bg-red-500 text-white font-bold
        flex items-center justify-center text-[24px]
    '>
        S
    </div>
  ), {
    ...size
  }
}
