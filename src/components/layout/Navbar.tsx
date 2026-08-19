"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";

import Container from "@/components/shared/Container";
import { SITE_CONFIG } from "@/constants/site";
import { createEventInquiryMessage } from "@/lib/whatsapp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const quoteLink = createEventInquiryMessage();

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-200 bg-pink-50">
              <span className="font-serif text-base font-bold text-[#F72572]">
                ID
              </span>
            </div>

            <div className="leading-none">
              <p className="font-serif text-xl font-bold tracking-tight text-slate-950">
                Innovative
              </p>

              <p className="mt-1 text-[9px] font-black uppercase tracking-[0.27em] text-[#F72572]">
                Decor Centre
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {SITE_CONFIG.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-2 text-sm font-bold text-slate-600 transition hover:text-[#F72572]"
              >
                {item.label}

                <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-0 rounded-full bg-[#F72572] transition-all duration-300 hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:+${SITE_CONFIG.phone}`}
              aria-label="Call Innovative Decor Centre"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-100 bg-pink-50 text-[#F72572] transition hover:border-pink-200 hover:bg-pink-100"
            >
              <Phone size={18} />
            </a>

            <a
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#F72572] px-5 text-sm font-black text-white shadow-lg shadow-pink-500/20 transition hover:-translate-y-0.5 hover:bg-[#DB145D] hover:shadow-xl"
            >
              <MessageCircle size={18} />
              Get a Quote
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={quoteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a quote on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F72572] text-white shadow-md shadow-pink-500/20"
            >
              <MessageCircle size={19} />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-100 bg-white text-slate-950 transition hover:bg-pink-50"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-pink-100 bg-white lg:hidden">
          <Container>
            <nav className="flex flex-col py-4">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-pink-50 py-4 text-sm font-bold text-slate-700 transition last:border-b-0 hover:pl-2 hover:text-[#F72572]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 grid gap-3">
                <a
                  href={quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#F72572] px-5 text-sm font-black text-white transition hover:bg-[#DB145D]"
                >
                  <MessageCircle size={18} />
                  Get a Quote on WhatsApp
                </a>

                <a
                  href={`tel:+${SITE_CONFIG.phone}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-pink-200 bg-pink-50 px-5 text-sm font-black text-[#F72572]"
                >
                  <Phone size={18} />
                  Call Us
                </a>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
