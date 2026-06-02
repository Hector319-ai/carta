"use client"

import { useState } from "react"
import { Cake, Gift, Heart, Sparkles } from "lucide-react"
import { Confetti } from "@/components/confetti"
import { FloatingBalloons } from "@/components/floating-balloons"

export function BirthdayCard() {
  const [open, setOpen] = useState(false)

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-12">
      <FloatingBalloons />
      {open && <Confetti />}

      {!open ? (
        <ClosedCard onOpen={() => setOpen(true)} />
      ) : (
        <OpenCard />
      )}
    </main>
  )
}

function ClosedCard({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-8 text-center animate-fade-in-up">
      <div className="flex flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
          <Gift className="size-4" />
          Un detalle para ti
        </span>
        <h1 className="text-balance font-script text-5xl leading-tight text-primary">
          Para mi niño precioso
        </h1>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
          Te preparé algo especial. Tócalo para abrirlo.
        </p>
      </div>

      <button
        onClick={onOpen}
        className="group relative flex flex-col items-center gap-4 rounded-3xl bg-card px-10 py-10 shadow-xl ring-1 ring-border transition-transform duration-300 hover:-translate-y-1 active:scale-95"
        aria-label="Abrir la carta de cumpleaños"
      >
        <span className="flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary animate-heartbeat">
          <Cake className="size-10" />
        </span>
        <span className="text-lg font-semibold text-foreground">
          Abrir mi regalo
        </span>
        <Sparkles className="absolute right-4 top-4 size-5 text-accent animate-sway" />
      </button>
    </div>
  )
}

function OpenCard() {
  return (
    <article className="relative z-10 w-full max-w-md animate-fade-in-up">
      <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-2xl ring-1 ring-border sm:p-10">
        {/* Decoración superior */}
        <div className="mb-6 flex items-center justify-center gap-2 text-accent">
          <Heart className="size-5 fill-current" />
          <Sparkles className="size-6" />
          <Heart className="size-5 fill-current" />
        </div>

        <header className="text-center">
          <p className="font-script text-3xl text-primary">Para mi niño precioso</p>
          <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¡Feliz Cumpleaños, Darian!
          </h1>
        </header>

        <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="space-y-5 text-pretty text-base leading-relaxed text-foreground/90">
          <p className="font-script text-2xl text-primary">Querido Darian...</p>
          <p>
            No puedo darte algo físicamente, por eso preparé este detalle para ti.
          </p>
          <p>
            Espero que pases un muy feliz cumpleaños, rodeado de personas que
            realmente quieres. En mi caso, estaré para ti, aunque me ocupe un rato
            jsjs.
          </p>
          <p>
            A decir verdad, no sé bien qué decir, ya que últimamente no hemos
            hablado mucho, pero sinceramente espero que te la pases bien.
          </p>
        </div>

        <footer className="mt-8 flex items-center justify-end gap-2">
          <span className="text-sm text-muted-foreground">Con cariño,</span>
          <span className="font-script text-3xl text-primary">Akuri</span>
        </footer>

        {/* Confeti decorativo en esquinas */}
        <Sparkles className="absolute left-4 top-4 size-5 text-accent animate-sway" />
        <Sparkles className="absolute bottom-4 right-4 size-5 text-accent animate-sway" />
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Hecho con <Heart className="inline size-4 fill-primary text-primary" /> para ti
      </p>
    </article>
  )
}
