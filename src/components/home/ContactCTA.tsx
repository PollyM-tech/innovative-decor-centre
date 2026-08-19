import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export default function ContactCTA() {
  const whatsappUrl =
    "https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20make%20an%20order.";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#D4145A] py-20 text-white sm:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Main CTA */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-pink-200">
              Let&apos;s Create Something Beautiful
            </p>

            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
              Flowers, gifts and decor for the moments that matter.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-pink-50">
              Whether you need fresh flowers, artificial arrangements, a
              thoughtful gift hamper or decor for a special occasion, we&apos;re
              ready to help.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-bold text-[#D4145A] transition hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>

              <a
                href="tel:+254714543029"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={18} />
                0714 543 029
              </a>
            </div>
          </div>

          {/* Right contact card */}
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-200">
              Visit & Connect
            </p>

            <div className="mt-6 space-y-6">
              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold">Visit Our Shop</p>

                  <p className="mt-1 text-sm leading-6 text-pink-50">
                    Aga Khan Walk
                    <br />
                    Re-insurance Plaza, Ground Floor
                    <br />
                    Innovative Decor Centre
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-sm font-bold">Call or WhatsApp</p>

                  <a
                    href="tel:+254714543029"
                    className="mt-1 block text-sm text-pink-50 hover:text-white"
                  >
                    0714 543 029
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="mt-14 border-t border-white/20 pt-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-200">
                Follow Innovative Decor Centre
              </p>

              <p className="mt-2 font-serif text-2xl">
                See more flowers, gifts and inspiration.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/innovativedecorcentre"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#D4145A]"
              >
                <Instagram size={17} />
                @innovativedecorcentre
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/innovativedecorcentre"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#D4145A]"
              >
                <Facebook size={17} />
                innovativedecorcentre
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@innovative_decor_centre"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#D4145A]"
              >
                <span className="text-base font-black">♪</span>
                @innovative_decor_centre
              </a>
            </div>
          </div>

          {/* TikTok secondary name */}
          <div className="mt-6 rounded-2xl bg-black/10 px-5 py-4">
            <p className="text-xs text-pink-100">
              TikTok:{" "}
              <span className="font-semibold text-white">innovitvebybetty</span>
              {" · "}
              <span className="font-semibold text-white">
                @innovative_decor_centre
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
