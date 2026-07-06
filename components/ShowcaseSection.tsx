'use client';

import { useState } from 'react';
import GoldTraceBorder from '@/components/ui/GoldTraceBorder';

const modules = [
  {
    id: '01',
    title: 'Fabric Preparation & Material Selection',
    titleKn: 'ಬಟ್ಟೆ ತಯಾರಿಕೆ ಮತ್ತು ವಸ್ತು ಆಯ್ಕೆ',
  },
  {
    id: '02',
    title: 'Pleating Calculations & Techniques',
    titleKn: 'ಮಡಿಕೆ ಲೆಕ್ಕಾಚಾರ ಮತ್ತು ತಂತ್ರಗಳು',
  },
  {
    id: '03',
    title: 'Scale Modeling & Doll Framework',
    titleKn: 'ಮಾಪಕ ಮಾಡೆಲಿಂಗ್ ಮತ್ತು ಬೊಂಬೆ ಚೌಕಟ್ಟು',
  },
  {
    id: '04',
    title: 'Temple Border & Zari Arrangements',
    titleKn: 'ದೇವಸ್ಥಾನದ ಅಂಚು ಮತ್ತು ಜರಿ ವ್ಯವಸ್ಥೆ',
  },
  {
    id: '05',
    title: 'Accessory Framing & Final Assembly',
    titleKn: 'ಅಲಂಕಾರಿಕ ಚೌಕಟ್ಟು ಮತ್ತು ಅಂತಿಮ ಜೋಡಣೆ',
  },
];

const included = [
  '5 Deep-Dive Video Modules',
  'Lifetime Course Access',
  'PDF Material & Sourcing Guides',
  'Private Community Access',
  'Certificate of Mastery',
  'Live Mentor Q&A Sessions',
];

export default function ShowcaseSection() {
  const [openModule, setOpenModule] = useState<string | null>('01');

  return (
    <section id="bento" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ color: '#D4AF37' }}
            >
              The Curriculum
            </span>
            <span
              className="h-px w-10"
              style={{ background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }}
            />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black"
            style={{ color: '#F9F6EE' }}
          >
            The{' '}
            <span className="text-gold-shimmer">Bento Experience</span>
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: '#C8B195' }}
          >
            Everything you need to master Karnataka&apos;s finest traditional craft arts
            — organized for clarity, depth, and lifetime retention.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* TILE 1 — Video Player (spans 2 cols on lg) */}
          <div className="lg:col-span-2">
            <GoldTraceBorder className="h-full">
              <div className="relative rounded-[calc(1rem-1px)] overflow-hidden">
                {/* Poster image */}
                <div className="relative aspect-video" style={{ background: '#0D0008' }}>
                  <img
                    src="/WhatsApp Image 2026-07-06 at 2.57.13 PM.jpeg"
                    alt="Course preview — Traditional Bridal Draping"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.55 }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, #1C0713 0%, rgba(28,7,19,0.3) 50%, transparent 100%)',
                    }}
                  />

                  {/* Golden play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      aria-label="Play course preview"
                      className="flex items-center justify-center rounded-full
                        transition-all duration-300 hover:scale-110 transform-gpu"
                      style={{
                        width: '72px',
                        height: '72px',
                        background: '#D4AF37',
                        boxShadow: '0 0 40px rgba(212,175,55,0.55), 0 0 80px rgba(212,175,55,0.2)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = '#E6CA65';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = '#D4AF37';
                      }}
                    >
                      <svg
                        className="translate-x-0.5"
                        style={{ width: '28px', height: '28px', color: '#2D0B1E' }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-5">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: '#D4AF37' }}
                    >
                      Free Preview — Module 01
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#F9F6EE' }}
                    >
                      Fabric Preparation & Material Selection
                    </p>
                  </div>
                </div>
              </div>
            </GoldTraceBorder>
          </div>

          {/* TILE 2 — Curriculum Accordion */}
          <div>
            <GoldTraceBorder className="h-full" innerClassName="h-full">
              <div className="p-5 h-full flex flex-col">
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: '#D4AF37' }}
                >
                  Course Modules
                </h3>
                <div className="space-y-2 flex-1">
                  {modules.map((mod) => (
                    <div key={mod.id} className="rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          setOpenModule(openModule === mod.id ? null : mod.id)
                        }
                        className="w-full flex items-center justify-between p-3
                          transition-colors duration-200 text-left"
                        style={{
                          background:
                            openModule === mod.id
                              ? 'rgba(212,175,55,0.07)'
                              : 'rgba(45,11,30,0.5)',
                        }}
                        onMouseEnter={(e) => {
                          if (openModule !== mod.id)
                            (e.currentTarget as HTMLElement).style.background = 'rgba(45,11,30,0.8)';
                        }}
                        onMouseLeave={(e) => {
                          if (openModule !== mod.id)
                            (e.currentTarget as HTMLElement).style.background = 'rgba(45,11,30,0.5)';
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="text-[11px] font-bold w-5 shrink-0"
                            style={{ color: 'rgba(212,175,55,0.55)' }}
                          >
                            {mod.id}
                          </span>
                          <span
                            className="text-xs font-semibold leading-snug"
                            style={{ color: '#F9F6EE' }}
                          >
                            {mod.title}
                          </span>
                        </div>
                        <svg
                          className="shrink-0 ml-2 transition-transform duration-200"
                          style={{
                            width: '13px',
                            height: '13px',
                            color: 'rgba(212,175,55,0.5)',
                            transform: openModule === mod.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </button>
                      {openModule === mod.id && (
                        <div
                          className="px-3 pb-3 pt-2"
                          style={{ background: 'rgba(212,175,55,0.04)' }}
                        >
                          <p
                            className="text-xs leading-relaxed"
                            style={{
                              color: '#C8B195',
                              fontFamily: 'var(--font-family-kannada)',
                            }}
                          >
                            {mod.titleKn}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </GoldTraceBorder>
          </div>

          {/* TILE 3 — What's Included */}
          <div>
            <GoldTraceBorder className="h-full" innerClassName="h-full">
              <div className="p-5 h-full">
                <h3
                  className="text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ color: '#D4AF37' }}
                >
                  What&apos;s Included
                </h3>
                <ul className="space-y-3.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="shrink-0 mt-0.5"
                        style={{ width: '15px', height: '15px', color: '#D4AF37' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm leading-snug" style={{ color: '#C8B195' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GoldTraceBorder>
          </div>

          {/* TILE 4 — Community Stats + Live Badge (spans 2 cols on md+) */}
          <div className="md:col-span-2">
            <GoldTraceBorder className="h-full" innerClassName="h-full">
              <div className="p-6 h-full">
                {/* Live badge */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(34,197,94,0.08)',
                      border: '1px solid rgba(34,197,94,0.2)',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full animate-live-pulse"
                      style={{ background: '#4ade80' }}
                    />
                    <span
                      className="text-xs font-bold uppercase tracking-widest"
                      style={{ color: '#4ade80' }}
                    >
                      Enrolling Now
                    </span>
                  </div>
                  <span className="text-xs" style={{ color: '#C8B195' }}>
                    Open to all skill levels · Karnataka & beyond
                  </span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {[
                    { value: '5,000+', label: 'Active Students' },
                    { value: '4.9★',   label: 'Avg. Rating' },
                    { value: '98%',    label: 'Completion Rate' },
                    { value: '24h',    label: 'Support Response' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-2xl font-black"
                        style={{ color: '#D4AF37' }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-xs uppercase tracking-wider mt-1"
                        style={{ color: '#C8B195' }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer link */}
                <div
                  className="mt-6 pt-5 flex items-center gap-2 flex-wrap"
                  style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}
                >
                  <span className="text-xs" style={{ color: '#C8B195' }}>
                    Also available on:
                  </span>
                  <a
                    href="https://www.youtube.com/@shubhachannel9181"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors duration-200"
                    style={{ color: '#D4AF37' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#E6CA65';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = '#D4AF37';
                    }}
                  >
                    YouTube Channel →
                  </a>
                </div>
              </div>
            </GoldTraceBorder>
          </div>
        </div>
      </div>
    </section>
  );
}
