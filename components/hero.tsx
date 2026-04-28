"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center gap-6 px-4 py-20 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.4em] text-[var(--accent-neon)]"
        >
          // UNDERGROUND_BROADCAST_COLLECTIVE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block animate-glitch neon-text">URAKICK</span>
          <span className="mt-2 block text-2xl font-bold text-foreground/80 sm:text-3xl">
            裏キック団
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          深夜帯のアングラ配信者集団。Kick / YouTube / ふわっち を横断し、
          雑談・ゲーム・音楽を毎日垂れ流す。
          <span className="block pt-2 font-mono text-xs tracking-widest text-[var(--accent-pink)]">
            $ tune_in --channel=urakick
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <Link
            href="/members"
            className="rounded border border-[var(--accent-neon)]/60 bg-[var(--accent-neon)]/10 px-5 py-2.5 font-mono text-sm tracking-widest text-[var(--accent-neon)] transition-all hover:bg-[var(--accent-neon)]/20 hover:shadow-[0_0_24px_rgba(57,255,20,0.35)]"
          >
            MEMBERS →
          </Link>
          <Link
            href="/schedule"
            className="rounded border border-border bg-card px-5 py-2.5 font-mono text-sm tracking-widest text-foreground/80 transition-all hover:border-foreground hover:text-foreground"
          >
            SCHEDULE
          </Link>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-20 top-1/2 hidden -translate-y-1/2 select-none font-mono text-[12rem] font-black leading-none text-[var(--accent-neon)]/[0.04] lg:block">
        URK
      </div>
    </section>
  );
}
