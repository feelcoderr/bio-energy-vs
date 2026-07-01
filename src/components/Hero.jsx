import { useState, useEffect } from 'react';

const highlights = [
  {
    label: 'Fuel Pellets',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: 'Biochar',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    label: 'Pyrolysis Oil',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    label: 'Carbon Materials',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    label: 'Carbon Impact',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-verdaez-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 overflow-hidden bg-white"
    >
      {/* ===== Full Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg-final.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center py-12 lg:py-20">

          {/* ===== Left Content ===== */}
          <div className="w-full lg:w-[45%] animate-fade-in-left">

            {/* Badge (Commented out because it is baked into the background image) */}
            {/* 
            <span className="inline-block bg-verdaez-100/90 text-verdaez-700 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Biomass to Value · Circular Future
            </span>
            */}

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-verdaez-900 leading-tight mb-6 mt-12">
              Turning Biomass Waste into Bioenergy, Biochar{' '}
              <span className="italic font-normal text-verdaez-600">&amp;</span>{' '}
              Advanced Carbon Materials
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl mb-8">
              A scalable biorefinery platform converting agricultural waste into
              high-value fuels, carbon products, and measurable climate impact —
              starting at 30&nbsp;TPD and scaling to 300&nbsp;TPD within five
              years.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#platform" className="btn-primary">
                Explore Our Platform
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#partner" className="btn-secondary bg-white/50 backdrop-blur-sm">
                Partner With Us
              </a>
            </div>

            {/* Highlights Row (Commented out because it is baked into the background image) */}
            {/*
            <div className="flex flex-wrap items-start gap-6 mt-12 opacity-0 animate-fade-in-up delay-400">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span className="text-verdaez-600">{item.icon}</span>
                  <span className="text-xs font-medium text-gray-600 text-center whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            */}
          </div>

        </div>
      </div>

      {/* Bottom gradient fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
