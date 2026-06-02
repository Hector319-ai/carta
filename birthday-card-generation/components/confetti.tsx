"use client"

import { useMemo } from "react"

const COLORS = [
  "var(--primary)",
  "var(--accent)",
  "var(--secondary-foreground)",
  "#f9a8d4",
  "#fbbf24",
  "#fb7185",
]

type Piece = {
  left: number
  delay: number
  duration: number
  size: number
  color: string
  rounded: boolean
}

export function Confetti({ count = 60 }: { count?: number }) {
  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 6 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rounded: Math.random() > 0.5,
    }))
  }, [count])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            backgroundColor: p.color,
            borderRadius: p.rounded ? "9999px" : "2px",
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
