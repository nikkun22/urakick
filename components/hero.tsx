"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b0d0f] via-[#0b0d0f]/70 to-[#131517]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(83,252,24,0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255,77,210,0.12), transparent 55%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col items-start justify-center gap-6 px-4 py-24 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="block text-kick-soft">URAKICK</span>
          <span className="mt-3 block text-2xl font-bold text-foreground/85 sm:text-3xl">
            裏キック団
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base leading-relaxed text-foreground/85 sm:text-lg"
        >
          ふわっちを主に活動しているメンバーが、
          <span className="text-kick font-bold">Kick</span>
          を盛り上げるために、
          <span className="font-bold">全一会長</span>
          が設立した配信者集団です。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <Link
            href="/members"
            className="rounded-md border border-[var(--accent-kick)]/60 bg-[var(--accent-kick)]/10 px-6 py-3 text-sm font-bold tracking-wider text-[var(--accent-kick)] transition-all hover:bg-[var(--accent-kick)]/20"
          >
            MEMBERS →
          </Link>
          <Link
            href="/rules"
            className="rounded-md border border-border bg-card/60 px-6 py-3 text-sm font-bold tracking-wider text-foreground/85 transition-all hover:border-foreground hover:text-foreground"
          >
            RULES
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
