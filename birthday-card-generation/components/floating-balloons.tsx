const BALLOONS = [
  { left: "6%", color: "#fb7185", delay: "0s", scale: 1 },
  { left: "20%", color: "#fbbf24", delay: "1.2s", scale: 0.8 },
  { left: "82%", color: "#f9a8d4", delay: "0.6s", scale: 1.1 },
  { left: "92%", color: "#fb7185", delay: "1.8s", scale: 0.75 },
]

export function FloatingBalloons() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {BALLOONS.map((b, i) => (
        <div
          key={i}
          className="absolute bottom-10 animate-float-up"
          style={{
            left: b.left,
            animationDelay: b.delay,
            transform: `scale(${b.scale})`,
          }}
        >
          <div
            className="relative h-20 w-16 rounded-[50%] shadow-lg"
            style={{ backgroundColor: b.color }}
          >
            <span
              className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45"
              style={{ backgroundColor: b.color }}
            />
            <span className="absolute left-1/2 top-full h-16 w-px -translate-x-1/2 bg-foreground/30" />
          </div>
        </div>
      ))}
    </div>
  )
}
