'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

import CareerDiscoveryForm from '@/components/assessment/CareerDiscoveryForm';
import LearningPortal from '@/components/portal/LearningPortal';
import ATSBuilder from '@/components/cv-builder/ATSBuilder';
import PerksDashboard from '@/components/perks/PerksDashboard';

type TabId = 'assessment' | 'portal' | 'cv' | 'perks';

const TABS: { id: TabId; label: string; short: string }[] = [
  { id: 'assessment', label: 'Career Discovery', short: 'Discover' },
  { id: 'portal', label: 'Learning Portal', short: 'Learn' },
  { id: 'cv', label: 'ATS CV Builder', short: 'CV' },
  { id: 'perks', label: 'Perks & Community', short: 'Perks' },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>('assessment');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* ── Header ───────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
        <div className="h-0.5 w-full bg-tesa-spectrum" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Official brand mark */}
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image
                src="/logo.png"
                alt="TESA Global Solutions"
                width={336}
                height={131}
                priority
                className="h-8 w-auto object-contain sm:h-9"
              />
              <span className="sr-only">TESA CareerHub</span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-brand-500 text-white shadow-brand'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Auth controls */}
            <div className="flex items-center gap-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition hover:text-white">
                    Sign in
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded-lg bg-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-brand transition hover:bg-brand-600">
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'h-8 w-8 ring-2 ring-brand-500/40',
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* Mobile navigation */}
          <nav className="scrollbar-none flex gap-1 overflow-x-auto pb-3 md:hidden">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-brand-500 text-white'
                    : 'bg-slate-900 text-slate-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Active module ────────────────────────────────────── */}
      <section
        key={activeTab}
        className="mx-auto max-w-7xl animate-fade-up px-4 py-10 sm:px-6 lg:px-8"
      >
        {activeTab === 'assessment' && <CareerDiscoveryForm />}
        {activeTab === 'portal' && <LearningPortal />}
        {activeTab === 'cv' && <ATSBuilder />}
        {activeTab === 'perks' && <PerksDashboard />}
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-8 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={336}
              height={131}
              className="h-6 w-auto object-contain opacity-60"
            />
          </div>
          <p className="text-center text-[11px] text-slate-500">
            © {new Date().getFullYear()} TESA Global Solutions · The Esther
            Adeleke Global Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
