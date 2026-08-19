import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Fresh Flowers",
    eyebrow: "Freshly Arranged",
    description:
      "Beautiful hand-picked flowers and custom arrangements for every special moment.",
  },
  {
    title: "Artificial Flowers",
    eyebrow: "Timeless Beauty",
    description:
      "Elegant floral arrangements created to stay beautiful for much longer.",
  },
  {
    title: "Gift Hampers",
    eyebrow: "Made With Love",
    description:
      "Thoughtfully curated hampers for birthdays, celebrations and meaningful surprises.",
  },
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Love & Romance",
  "Congratulations",
  "Get Well Soon",
  "Thank You",
];

const featured = [
  {
    title: "Signature Red Roses",
    category: "Fresh Flowers",
    image: "/image/flowers/homeprofile.png",
  },
  {
    title: "Luxury Rose Bouquet",
    category: "Love & Romance",
    image: "/image/flowers/homeprofile.png",
  },
  {
    title: "Celebration Roses",
    category: "Special Occasion",
    image: "/image/flowers/homeprofile.png",
  },
];

export default function Home() {
  const whatsappUrl =
    "https://wa.me/254714543029?text=Hello%20Innovative%20Decor%20Centre,%20I%20would%20like%20to%20make%20an%20order.";

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-pink-100/70 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-8 px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4145A] font-serif text-sm font-semibold text-[#D4145A]">
              IDC
            </div>

            <div className="leading-tight">
              <p className="font-serif text-lg tracking-[0.12em]">INNOVATIVE</p>
              <p className="text-[9px] font-bold tracking-[0.25em] text-[#D4145A]">
                DECOR CENTRE LTD
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm lg:flex">
            <Link href="/" className="text-[#D4145A]">
              Home
            </Link>
            <Link href="#flowers" className="transition hover:text-[#D4145A]">
              Flowers
            </Link>
            <Link href="#hampers" className="transition hover:text-[#D4145A]">
              Gift Hampers
            </Link>
            <Link href="#occasions" className="transition hover:text-[#D4145A]">
              Occasions
            </Link>
            <Link href="#events" className="transition hover:text-[#D4145A]">
              Events & Decor
            </Link>
            <Link href="#about" className="transition hover:text-[#D4145A]">
              About
            </Link>
            <Link href="#contact" className="transition hover:text-[#D4145A]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-[#D4145A] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#B5104D] md:inline-flex"
            >
              Order on WhatsApp
            </a>

            <button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-pink-100 lg:hidden"
              aria-label="Open menu"
            >
              <span className="h-px w-4 bg-[#D4145A]" />
              <span className="h-px w-4 bg-[#D4145A]" />
              <span className="h-px w-4 bg-[#D4145A]" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#FFF5F8]">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-pink-100/30 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-100/40 blur-3xl" />

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="z-10 py-16 text-center lg:py-24 lg:text-left">
            <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-[#D4145A]">
              FRESH FLOWERS • ARTIFICIAL FLOWERS • GIFT HAMPERS
            </p>

            <h1 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[82px]">
              Flowers made for
              <span className="mt-2 block italic text-[#D4145A]">
                life&apos;s beautiful moments.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base lg:mx-0">
              From breathtaking fresh bouquets to timeless artificial flowers
              and thoughtfully curated gift hampers, we help you make every
              special moment feel even more meaningful.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="#flowers"
                className="inline-flex min-h-12 items-center justify-center gap-4 rounded-md bg-[#D4145A] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#B5104D]"
              >
                Explore Flowers
                <span>→</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-pink-300 bg-white px-6 text-sm font-semibold text-[#D4145A] transition hover:-translate-y-0.5"
              >
                Order on WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {[
                ["Fresh", "Quality flowers"],
                ["Thoughtful", "Beautiful gifting"],
                ["Personal", "Made for your moment"],
              ].map(([title, copy]) => (
                <div
                  key={title}
                  className="border-l-2 border-pink-200 pl-4 text-left"
                >
                  <p className="font-serif text-lg">{title}</p>
                  <p className="mt-1 text-xs text-zinc-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-[720px]">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/80 blur-sm sm:h-[500px] sm:w-[500px]" />

            <div className="absolute bottom-[-30px] left-1/2 h-[540px] w-[540px] -translate-x-1/2 -rotate-3 sm:h-[620px] sm:w-[620px] lg:bottom-[-20px] lg:left-auto lg:right-[-120px] lg:h-[720px] lg:w-[720px] lg:translate-x-0">
              <Image
                src="/images/flowers/homeprofile.png"
                alt="Luxury red rose bouquet"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="absolute right-2 top-36 hidden rounded-xl bg-white/95 px-5 py-4 shadow-xl sm:block">
              <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Handcrafted
              </p>
              <p className="mt-1 font-serif text-base">With Love</p>
            </div>

            <div className="absolute bottom-28 left-3 hidden rounded-xl bg-white/95 px-5 py-4 shadow-xl sm:block lg:left-8">
              <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-400">
                Available for
              </p>
              <p className="mt-1 font-serif text-base">Custom Orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="flowers" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4145A]">
              OUR COLLECTIONS
            </p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
              Find something beautiful
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-500">
              Explore our most-loved floral and gifting collections for every
              person, place and occasion.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {collections.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-pink-100 bg-[#FFF9FB] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute right-5 top-1 font-serif text-7xl text-[#D4145A]/[0.06]">
                  0{index + 1}
                </span>

                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D4145A]">
                  {item.eyebrow}
                </p>

                <h3 className="mt-10 font-serif text-3xl">{item.title}</h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>

                <Link
                  href="#featured"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-semibold text-[#D4145A]"
                >
                  Explore collection
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured flowers */}
      <section id="featured" className="bg-[#FFF9FB] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4145A]">
                FEATURED FLOWERS
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] sm:text-5xl">
                Flowers you&apos;ll love
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-zinc-500">
              Elegant arrangements created for birthdays, anniversaries,
              surprises and those everyday moments worth celebrating.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-pink-100 bg-white"
              >
                <div className="relative h-[420px] overflow-hidden bg-zinc-50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D4145A]">
                    {item.category}
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-3 text-xs font-semibold text-[#D4145A]"
                  >
                    Order via WhatsApp <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section id="occasions" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4145A]">
              SHOP BY OCCASION
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Say it beautifully with flowers
            </h2>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-pink-100 sm:grid-cols-3 lg:grid-cols-6">
            {occasions.map((occasion) => (
              <a
                key={occasion}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-36 flex-col items-center justify-center gap-3 border-b border-r border-pink-100 px-4 text-center transition hover:bg-[#D4145A] hover:text-white"
              >
                <span className="text-2xl text-[#D4145A] transition group-hover:text-white">
                  ✿
                </span>
                <span className="font-serif text-sm">{occasion}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gift hampers */}
      <section id="hampers" className="bg-[#FFF4F7] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4145A]">
              THOUGHTFUL GIFTING
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              More than flowers.
              <span className="block italic text-[#D4145A]">
                A gift they&apos;ll remember.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600">
              Surprise someone special with a beautifully curated hamper for a
              birthday, celebration, romantic gesture or simple expression of
              appreciation.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Curated gift selections",
                "Beautiful presentation",
                "Custom requests available",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-pink-200 bg-white px-4 py-2 text-xs text-zinc-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-4 rounded-md bg-[#D4145A] px-6 text-sm font-semibold text-white transition hover:bg-[#B5104D]"
            >
              Ask About Gift Hampers
              <span>→</span>
            </a>
          </div>

          <div className="relative flex min-h-[400px] items-center justify-center">
            <div className="absolute font-serif text-[120px] italic text-[#D4145A]/10 sm:text-[170px]">
              Gift
            </div>

            <div className="relative h-56 w-72 -rotate-3 rounded-md bg-gradient-to-br from-[#E3266D] to-[#B8104B] shadow-2xl sm:h-64 sm:w-80">
              <div className="absolute -left-4 -right-4 -top-8 h-14 bg-[#D4145A]" />
              <div className="absolute inset-y-0 left-1/2 w-11 -translate-x-1/2 bg-pink-100" />
              <div className="absolute left-0 right-0 top-1/2 h-10 -translate-y-1/2 bg-pink-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-[#24171C] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[460px] overflow-hidden lg:min-h-[650px]">
            <Image
              src="/image/flowers/homeprofile.png"
              alt="Floral decor for special occasions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>

          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
            <p className="text-[10px] font-bold tracking-[0.2em] text-pink-300">
              BEYOND THE FLOWER SHOP
            </p>

            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
              We also bring celebrations to life.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-300">
              Flowers are at the heart of what we do, and our creativity also
              extends into elegant event styling for meaningful celebrations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-zinc-200">
              {[
                "Weddings",
                "Birthdays",
                "Bridal Showers",
                "Baby Showers",
                "Corporate Events",
                "Special Celebrations",
              ].map((event) => (
                <div key={event} className="border-b border-white/10 pb-3">
                  {event}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-4 rounded-md bg-[#D4145A] px-6 text-sm font-semibold"
              >
                Plan Your Event
                <span>→</span>
              </a>

              <Link
                href="#gallery"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-8">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4145A]">
              ABOUT INNOVATIVE
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Your local floral & gifting destination.
            </h2>
          </div>

          <div className="lg:border-l lg:border-pink-100 lg:pl-14">
            <p className="text-sm leading-7 text-zinc-600">
              Innovative Decor Centre brings together fresh flowers, artificial
              arrangements, thoughtful gift hampers and creative event styling
              under one roof.
            </p>

            <p className="mt-5 text-sm leading-7 text-zinc-600">
              Whether you are celebrating someone special or simply brightening
              a space, our focus is on creating something beautiful and personal
              for every customer.
            </p>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 text-xs font-semibold text-[#D4145A]"
            >
              Visit our shop
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#D4145A] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-pink-200">
              VISIT OUR SHOP
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              We&apos;d love to see you.
            </h2>

            <div className="mt-5 flex flex-col gap-1 text-sm text-pink-50">
              <strong className="text-white">Innovative Decor Centre</strong>
              <span>Aga Khan Walk</span>
              <span>Re-insurance Plaza, Ground Floor</span>
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-pink-200">
              Call or WhatsApp
            </p>
            <a
              href="tel:+254714543029"
              className="mt-2 block font-serif text-3xl"
            >
              +254 714 543 029
            </a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-4 rounded-md bg-white px-6 text-sm font-semibold text-[#D4145A]"
          >
            WhatsApp Us
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-serif text-xl tracking-[0.12em]">INNOVATIVE</p>
            <p className="text-[9px] font-bold tracking-[0.25em] text-[#D4145A]">
              DECOR CENTRE LTD
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
              Fresh flowers, artificial flowers, gift hampers and beautiful
              event styling in Nairobi.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#D4145A]">
              Shop
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-600">
              <Link href="#flowers">Fresh Flowers</Link>
              <Link href="#flowers">Artificial Flowers</Link>
              <Link href="#hampers">Gift Hampers</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#D4145A]">
              Explore
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-600">
              <Link href="#occasions">Occasions</Link>
              <Link href="#events">Events & Decor</Link>
              <Link href="#about">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#D4145A]">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-600">
              <a href="tel:+254714543029">+254 714 543 029</a>
              <span>Aga Khan Walk</span>
              <span>Re-insurance Plaza</span>
              <span>Ground Floor</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-pink-100 px-5 pt-6 text-xs text-zinc-400 sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Innovative Decor Centre Ltd.</span>
          <span>Flowers • Gifts • Events</span>
        </div>
      </footer>
    </main>
  );
}
