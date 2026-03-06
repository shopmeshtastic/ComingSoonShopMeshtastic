"use client"

import Image from "next/image"

// Simple QR code generator using canvas — no external dependency needed
// Generates a minimal QR-like pattern. For production, swap with a real QR library.

interface QrCodeBlockProps {
  url: string
  imgSrc: string
  size?: number
}

export function QrCodeBlock({ url, imgSrc, size = 180 }: QrCodeBlockProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 bg-foreground rounded-2xl shadow-lg">
        <Image src={imgSrc} alt="QR-код" width={size} height={size} />
      </div>
      <span className="text-sm text-muted-foreground">
        Наведите камеру на QR-код
      </span>
    </div>
  )
}
