"use client";

import { useState } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────

const FREE_APPS = [
  { emoji: "📋", name: "Clipboard Bob", tagline: "Clipboard history, search, and pin" },
  { emoji: "📸", name: "Screenshot Bob", tagline: "Capture, annotate, and share screenshots" },
  { emoji: "🧮", name: "Calculator Bob", tagline: "Scientific, programmer, and converter modes" },
  { emoji: "⛅", name: "Weather Bob", tagline: "Local weather by city or zip code" },
  { emoji: "▦", name: "QR Bob", tagline: "Generate and scan QR codes" },
  { emoji: "🎨", name: "Color Bob", tagline: "Pick colors from anywhere on your screen" },
  { emoji: "🧬", name: "Shortcut Bob", tagline: "Create a Bob App shortcut for any URL or app" },
  { emoji: "🌐", name: "Hosts Bob", tagline: "Edit /etc/hosts with profiles and block lists" },
];

const PRO_APPS = [
  { emoji: "🗂️", name: "Triage Bob", tagline: "Sort, OCR, and AI-analyze incoming files" },
  { emoji: "📁", name: "Index Bob", tagline: "Rename, organize, and index any folder" },
  { emoji: "⏰", name: "Reminder Bob", tagline: "Smart reminders with email and calendar" },
  { emoji: "🗜️", name: "Shrink Bob", tagline: "Compress images, PDFs, and video" },
  { emoji: "📎", name: "Merge Bob", tagline: "Combine, split, and reorder PDFs" },
  { emoji: "🔏", name: "Stamp Bob", tagline: "Watermark and stamp files in bulk" },
  { emoji: "🔍", name: "Peek Bob", tagline: "Inspect metadata, EXIF, and checksums" },
  { emoji: "🕐", name: "Clock Bob", tagline: "Time tracker, timezones, Discord timestamps" },
  { emoji: "📋", name: "Form Bob", tagline: "Autofill PDF forms from saved profiles" },
  { emoji: "💰", name: "Budget Bob", tagline: "Import statements, track spending locally" },
  { emoji: "💾", name: "Backup Bob", tagline: "Schedule and watch local backups" },
  { emoji: "📝", name: "Summary Bob", tagline: "Summarize URLs, PDFs, audio, and video" },
  { emoji: "🔒", name: "Zip & Protect Bob", tagline: "Password-encrypt files and folders" },
  { emoji: "🔎", name: "Scan Bob", tagline: "Scan images to editable OCR overlays" },
  { emoji: "📺", name: "TV Bob", tagline: "One-click launcher for free streaming" },
  { emoji: "⚓", name: "Pirate Bob", tagline: "Download video from anywhere" },
  { emoji: "🎮", name: "Emulator Bob", tagline: "ROM library and emulator launcher" },
  { emoji: "💰", name: "Deal Bob", tagline: "Cashback rates and coupon codes" },
  { emoji: "🔐", name: "Password Bob", tagline: "KeePass-compatible local password vault" },
  { emoji: "🎙️", name: "Whisper Bob", tagline: "Local speech-to-text via Whisper CLI" },
  { emoji: "🤖", name: "Ollama Bob", tagline: "Chat UI for local Ollama LLMs" },
  { emoji: "📦", name: "Homebrew Bob", tagline: "Homebrew GUI — install, update, clean" },
  { emoji: "💬", name: "Clone Bob", tagline: "Web wrapper / custom app factory" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function AppCard({ emoji, name, tagline, badge, badgeColor }: {
  emoji: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
}) {
  return (
    <div
      className="group bg-[#18181b] border border-[#27272a] rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:border-indigo-500 cursor-default"
    >
      <div className="text-4xl">{emoji}</div>
      <div>
        <div className="font-semibold text-[#fafafa] text-sm">{name}</div>
        <div className="text-[#71717a] text-xs mt-1">{tagline}</div>
      </div>
      <span
        className={`self-start text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor}`}
      >
        {badge}
      </span>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState<"free" | "pro">("free");

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa]">

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg text-white tracking-tight">Bob Browser</span>
          <a
            href="#pro"
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-full px-5 py-2 text-sm transition"
          >
            Bob Pro — $24.99
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#71717a] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Local-first Mac Tools
          </p>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            Everything your Mac<br />was missing.
          </h1>
          <p className="text-[#71717a] text-lg mb-10 max-w-xl mx-auto">
            33 free and pro utilities. No cloud. No subscriptions. No accounts. Just tools that work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="#apps"
              className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-full px-8 py-4 text-base transition"
            >
              Download Free
            </a>
            <a
              href="#apps"
              className="border border-[#27272a] hover:border-indigo-500 text-[#fafafa] font-semibold rounded-full px-8 py-4 text-base transition"
            >
              See all apps →
            </a>
          </div>
          <p className="text-[#71717a] text-sm">
            Free forever &middot; Bob Pro from $24.99
          </p>
        </div>
      </section>

      {/* ── Free Apps Strip ── */}
      <section className="py-24 px-6 bg-[#0d0d0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">Free forever — no strings attached</h2>
          <p className="text-[#71717a] mb-10">Eight powerful tools, zero cost, zero account required.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {FREE_APPS.map((app) => (
              <AppCard
                key={app.name}
                {...app}
                badge="Free"
                badgeColor="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bob Pro ── */}
      <section id="pro" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#18181b] border border-indigo-500/40 rounded-3xl p-8 sm:p-12 grid sm:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div>
              <div className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-indigo-500/20">
                Bob Pro
              </div>
              <h2 className="text-4xl font-extrabold text-white mb-2 leading-tight">
                $24.99 one-time<br />
                <span className="text-indigo-400">no subscription.</span>
              </h2>
              <p className="text-[#71717a] mb-8">
                Unlock all 33 apps. Replaces tools worth $200+/year.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Password Bob — local KeePass vault",
                  "Budget Bob — import bank statements",
                  "Pirate Bob — download video anywhere",
                  "Emulator Bob — ROM library + launcher",
                  "Deal Bob — cashback rates + coupons",
                  "Ollama Bob — chat UI for local LLMs",
                  "Whisper Bob — local speech-to-text",
                  "+ 16 more pro tools",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#fafafa]">
                    <span className="text-indigo-400 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block w-full sm:w-auto text-center bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-full px-8 py-4 text-base transition"
              >
                Get Bob Pro
              </a>
            </div>

            {/* Right — emoji grid */}
            <div>
              <p className="text-[#71717a] text-xs font-semibold tracking-widest uppercase mb-5">
                All 25 Pro Apps
              </p>
              <div className="grid grid-cols-5 gap-3">
                {PRO_APPS.map((app) => (
                  <div
                    key={app.name}
                    title={app.name}
                    className="bg-[#09090b] border border-[#27272a] rounded-xl h-14 w-14 flex items-center justify-center text-2xl hover:border-indigo-500/50 transition cursor-default"
                  >
                    {app.emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why local-first ── */}
      <section className="py-24 px-6 bg-[#0d0d0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Why local-first?</h2>
          <p className="text-[#71717a] text-center mb-16 max-w-xl mx-auto">
            Most apps treat your data as their resource. We disagree.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Private by default",
                desc: "Your files never leave your Mac. No analytics, no tracking, no cloud sync.",
              },
              {
                icon: "⚡",
                title: "Instant, always",
                desc: "No login screens. No loading spinners. Apps open in under a second.",
              },
              {
                icon: "💸",
                title: "Pay once, own it",
                desc: "Bob Pro is a one-time purchase. No renewal emails, ever.",
              },
            ].map((col) => (
              <div key={col.title} className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8 text-center">
                <div className="text-5xl mb-5">{col.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3">{col.title}</h3>
                <p className="text-[#71717a] text-sm leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All 33 Apps Grid ── */}
      <section id="apps" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-2">All 33 apps</h2>
          <p className="text-[#71717a] mb-10">Every tool in the Bob Browser suite.</p>

          {/* Tabs */}
          <div className="flex gap-2 mb-10">
            <button
              onClick={() => setActiveTab("free")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === "free"
                  ? "bg-indigo-500 text-white"
                  : "bg-[#18181b] border border-[#27272a] text-[#71717a] hover:text-white"
              }`}
            >
              Free (8)
            </button>
            <button
              onClick={() => setActiveTab("pro")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeTab === "pro"
                  ? "bg-indigo-500 text-white"
                  : "bg-[#18181b] border border-[#27272a] text-[#71717a] hover:text-white"
              }`}
            >
              Pro (25)
            </button>
          </div>

          {activeTab === "free" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {FREE_APPS.map((app) => (
                <AppCard
                  key={app.name}
                  {...app}
                  badge="Free"
                  badgeColor="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                />
              ))}
            </div>
          )}

          {activeTab === "pro" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PRO_APPS.map((app) => (
                <AppCard
                  key={app.name + app.tagline}
                  {...app}
                  badge="Pro"
                  badgeColor="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#27272a] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-bold text-white text-lg mb-1">Bob Browser</div>
            <div className="text-[#71717a] text-xs">Built for macOS Apple Silicon. Requires macOS 12+.</div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="flex gap-5 text-sm">
              <a
                href="https://github.com/WorldOfBobs"
                className="text-[#71717a] hover:text-white transition"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://bobboard.app"
                className="text-[#71717a] hover:text-white transition"
                target="_blank"
                rel="noreferrer"
              >
                bobboard.app
              </a>
            </div>
            <div className="text-[#71717a] text-xs">© 2025 Gravy Keller. All rights reserved.</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
